# Contributing

[简体中文](CONTRIBUTING.md) | English

Suggestions, corrections, and link fixes are welcome. A clear use case with supporting sources is enough; a long research report is not required.

## Scope

- Help teams use AI to get work done, or build, operate, and improve AI applications.
- Identify the project and provide an accessible official product page, documentation, or maintainer repository. Link tutorials and papers to their authors or publishers.
- Explain the work the resource helps with and the team context in which it is useful.
- Provide verifiable documentation. Stars, rankings, prices, and vendor performance claims are not reasons for inclusion.
- General chat platforms, databases, and drawing tools need a specific AI use case. Defer entries whose identity or source cannot be verified.

Commercial products, self-hostable projects, and developer components are all eligible. A public repository does not make every part of a product open source. Check hosted, community, and historical editions separately.

Categories follow the work problems teams need to solve, such as moving context, handing off tasks, reusing experience, or diagnosing execution. Place a multipurpose project under its primary use case and clarify its form and boundaries in the description. Categories are independent discovery paths; teams do not need a component from every category.

## Suggesting or changing an entry

1. Search the README for existing names, former names, and alternative links. Choose the closest existing category.
2. Link to an official source and describe the purpose briefly. Clarify the product edition when useful. Avoid unsupported claims such as “best,” “production-ready,” or “completely secure.”
3. Include documentation supporting the description and a team use case in the issue or pull request. Disclose whether you have used the project and any affiliation. Hands-on experience is welcome but not required.
4. Keep each pull request focused on a project or a related set of corrections. Explain renames, migrations, and removals with sources.

Entry format:

```markdown
- [Project name](official-link) - One sentence explaining what it helps a team do.
```

Sort entries by their English project names, ignoring case; use pinyin when only a Chinese name is available. Keep the same order in both languages. Ordering helps navigation and is not a ranking. Put tools in their use-case categories and protocols, tutorials, papers, and indexes in the resource sections. A paper and its companion repository can share one entry.

## Keeping both languages aligned

- [README.md](README.md) is the primary Chinese entry point; [README.en.md](README.en.md) is the complete English list. Both contain the same categories, entries, and official links.
- Update both versions for additions, removals, renames, and category changes. Preserve edition distinctions, preview status, and capability boundaries.
- Translate the purpose without adding unverified capabilities. Use official English names and retain original names when needed to distinguish projects.
- Issues and pull requests may be in Chinese or English. Request translation help if needed; maintainers will align both versions before merging.

## Before submitting

- Confirm that names, maintainers, and links identify the intended projects. Prefer canonical official URLs without tracking parameters, short links, or referral codes.
- Read the source and check that the description does not present planned features, another edition's capabilities, or speculation as facts.
- Preview GitHub Markdown and check table-of-contents anchors, relative file links, and new external links. Note login walls or automated-access restrictions in the pull request.
- Update the table of contents when headings change. Preserve UTF-8 encoding, blank lines, and consistent list formatting.
- Compare project names, links, ordering, and entry counts across languages. Check language switches and contribution-guide links too.
- Run `git diff --check` and remove stray whitespace, personal paths, internal URLs, credentials, and material you are not authorized to publish.

This repository is a documentation list and requires no application dependencies or build system. Maintainers consider usefulness, overlap, and evidence; the list does not need to include every candidate.

## Discussion and license

Discuss use cases, evidence, and reproducible problems respectfully. Contributions must be original or authorized for submission and are published under this list's CC0 1.0 license. Linked projects retain their own licenses.
