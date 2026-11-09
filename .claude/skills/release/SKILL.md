---
name: release
description: Cut a release of ha-whatsapp-notifier. Bumps versions, checks docs, tags and drafts release notes.
disable-model-invocation: true
---

Release steps. Argument: new version (for example `0.3.2`).

1. Run `node --test` in `whatsapp_bridge/`. Stop on failure.
2. Set `version` in `custom_components/whatsapp_notifier/manifest.json` and `whatsapp_bridge/config.yaml` to the same value.
3. Grep README and docs for the old version and for `Anonymouse0104`. Fix hits.
4. Show `git diff`. Ask for approval before committing.
5. Commit `Release vX.Y.Z`. Do not add Claude attribution.
6. Ask for approval before pushing. Then tag `vX.Y.Z`, push the tag, and run `gh release create` with notes from `git log <previous tag>..HEAD`.
