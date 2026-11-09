---
name: ha-integration-conventions
description: Conventions for custom_components/whatsapp_notifier. Use when editing the integration, flows, entities or translations.
user-invocable: false
---

- Integration lives in `custom_components/whatsapp_notifier/`. Bridge lives in `whatsapp_bridge/` (Node, ESM).
- Entities derive from the shared `Base` class. Add new ones next to `StatusSensor` and `ChatSensor`.
- Chat settings are subentries (`ChatSubentryFlow`). Global settings go in `WhatsAppOptionsFlow`.
- Filtering per function belongs in the integration, not in template sensors.
- Keep user-facing strings in translations, not in code.
- Public repo: no real name, employer, chat IDs, internal IPs or secrets. GitHub owner is `anonymouse-labs`.
- Code, commits and comments in English.
