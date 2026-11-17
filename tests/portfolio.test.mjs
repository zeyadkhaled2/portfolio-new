import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { site, navLinks } from "../src/data/site.js";
import { projects } from "../src/data/projects.js";
import { experience, skills } from "../src/data/profile.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(rootDir, "public");

function assertPublicAssetExists(assetPath, context) {
  assert.ok(assetPath && assetPath.startsWith("/"), `${context}: asset path must start with '/'`);
  const fullPath = path.join(publicDir, assetPath.slice(1));
  assert.ok(fs.existsSync(fullPath), `${context}: missing public file ${assetPath}`);
}

test("site identity, navigation, and social links have no dead placeholders", () => {
  assert.equal(site.name, "Ziad Khaled");
  assert.match(site.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  assert.doesNotThrow(() => new URL(site.url));
  assert.ok(site.education?.degree && site.education?.school);
  assert.ok(navLinks.length >= 4);
  for (const link of navLinks) {
    assert.ok(link.label.trim().length > 0);
    assert.ok(link.href.startsWith("/#"));
  }
  for (const social of site.socials) {
    assert.notEqual(social.href, "#", `Dead social link for ${social.label}`);
  }
  if (site.portraitUrl) {
    assertPublicAssetExists(site.portraitUrl, "site.portraitUrl");
  }
});

test("all projects have unique slugs, complete case-study fields, and existing media", () => {
  const seenSlugs = new Set();
  const allowedTones = new Set(["obsidian", "peach", "mint", "lavender"]);

  for (const project of projects) {
    assert.ok(project.slug, "Project slug is required");
    assert.ok(!seenSlugs.has(project.slug), `Duplicate slug: ${project.slug}`);
    seenSlugs.add(project.slug);

    assert.ok(allowedTones.has(project.tone), `Invalid tone on ${project.slug}: ${project.tone}`);
    assert.ok(project.overview.length > 40, `Overview too short on ${project.slug}`);
    assert.ok(
      project.challenge?.problem && project.challenge?.decision && project.challenge?.result,
      `Missing challenge story on ${project.slug}`
    );
    assert.ok(project.features.length >= 3, `Features missing on ${project.slug}`);
    assert.ok(project.architecture.length >= 2, `Architecture notes missing on ${project.slug}`);
    assert.ok(project.techStack.length >= 3, `Tech stack missing on ${project.slug}`);

    assertPublicAssetExists(project.coverImage, `${project.slug}.coverImage`);
    if (project.secondaryImage) {
      assertPublicAssetExists(project.secondaryImage, `${project.slug}.secondaryImage`);
    }
    if (project.video) {
      assertPublicAssetExists(project.video.src, `${project.slug}.video.src`);
      assertPublicAssetExists(project.video.poster, `${project.slug}.video.poster`);
    }
    assert.ok(project.screenshots.length >= 1, `${project.slug} needs screenshots`);
    for (const shot of project.screenshots) {
      assertPublicAssetExists(shot.src, `${project.slug}.screenshot(${shot.title})`);
    }
  }
});

test("experience caseStudy links, skills, and copy are valid", () => {
  assert.ok(experience.length >= 2);
  assert.ok(skills.length >= 4);

  const validPaths = new Set(projects.map((p) => `/work/${p.slug}`));
  for (const job of experience) {
    for (const cs of job.caseStudies || []) {
      assert.ok(validPaths.has(cs.href), `Invalid caseStudy href: ${cs.href}`);
    }
  }

  const aboutSource = fs.readFileSync(
    path.join(rootDir, "src/components/sections/About.js"),
    "utf8"
  );
  assert.doesNotMatch(aboutSource, /Placeholder bio/i);

  const devreps = projects.find((p) => p.slug === "devreps");
  assert.ok(devreps, "DevReps project must exist");
  const devrepsText = [
    devreps.description,
    devreps.overview,
    ...devreps.features.map((f) => `${f.title} ${f.detail}`),
  ].join(" ");
  assert.doesNotMatch(devrepsText, /\bsix\b/i);
});
