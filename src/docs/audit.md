---
path: '/docs/audit'
date: '2017-11-07'
title: 'AXRL Audits'
---

## Object types

### SoftwareDescription

Accessibility testing often involves testing multiple pages of a website, or multiple views of an app. A software description sets the scope for a collection of web pages, or a set of views in an app, for which accessibility audits are performed. There are no rules on how to scope a software description. The scope of a software description should be defined in a way that best suites the people responsible for its development and maintenance.

Larger software often has multiple teams responsible for different parts. For example, the website of a bank often has public site, a authentication area, a account management system, etc.. Each of these areas gets its own softwareDescription. Use the `sub_components` property to reference SoftwareDescriptions that are contained within a larger application.

**Editor's note:** The SoftwareDescription in other contexts is often called a "project". This word was not used because it creates a language of treating accessibility as a project, rather than as a process.

**Example:**

```json
{
  "@type": "WebSiteDescription", // Extension to schema.org/WebSite
  "name": "Deque University",
  "homepage": "https://dequeuniversity.com/",
  "scope": [
    "https://*.deuque.com/*",
    "!https://.deuque.com/demo/"
  ],
  "owner": {
    "@type": "Organisation", // From Schema.org
    "name": "Deque Systems",
    "url": "https://deque.com/"
  },
  "sub_components": [
    {
      "@type": "WebSiteDescription",
      "name": "Attest HTML user guide",
      "homepage": "https://dequeuniversity.com/guide/attest/",
      "scope": "https://dequeuniversity.com/guide/attest/*"
    }
  ]
}
```

### Auditor

### AuditResult
