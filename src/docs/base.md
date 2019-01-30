---
path: '/docs/base'
date: '2017-11-07'
title: 'Accessibility Reporting Language'
---

## Introduction

Accessibility Reporting Language (AXRL) is a data format designed to describe accessibility tests for Web pages, Native apps and other software. AXRL is designed to be a flexible and extendable data format. AXRL is designed as a JSON format, although because it is based on semantic web technologies, it could also be expressed in other formats.

**Example 1: A basic web page test**

This example shows the test for example.com, where the test produced 2 results. One of the results is "failed", and the second is "passed".

```json
{
  "@context": "https://axrl.org/context/web-v1.json",
  "@type": "WebPageTest",
  "url": "http://example.com",
  "results": [
    {
      "@type": "TestFailure",
      "impact": "critical",
      "description": "Web pages must have a title",
      "remediation": "Add a title to the web page",
      "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/document-title",
      "node": {
        "@type": "DOMNode",
        "html": "<html>...</html>",
        "selector": "html"
      }
    },
    {
      "@type": "TestSuccess",
      "test": "axe-core:color-contrast",
      "node": {
        "@type": "DOMNode",
        "html": "<h1>Welcome</h1>",
        "selector": "h1"
      }
    },
    {
      "type": "TestAbort",
      "type": "TestSkip"
    }
  ]
}
```

### `@context` property

Context is a required property that lives at the root object. The context provides a definition for all of the terms used in the data format. There are a number of contexts predefined for AXRL:

**TODO**: Define / describe default contexts

If the default contexts are insufficient, a custom context can also be provided. The [JSON-LD standard](https://json-ld.org/spec/latest/json-ld/) defines how these can be created.

### `@type` property

An object's `@type` property defines what that object is. By adding a type to all objects, that object is explicitly defined, instead of having to infer the type from its properties, or from the property it is on. Types can easilly be extended to add properties as they are needed. For example, `WebPageTest` and `AndroidViewTest` are both extensions on the `UserInterfaceTest` type. This gives them a number of shared properties, as some unique properties.

**TODO**: Add a UML graphic showing inheritance

## Types

- [InterfaceTest]
  - [WebPageTest]
- [TestResult](/TestResult)
  - [TestSuccess](/TestSuccess)
  - [TestFailure](/TestFailure)
  - [TestAbort](/TestAbort)
  - [TestSkip](/TestSkip)
- [OutcomeType]
- [ImpactType]
- [Node]
  - [DOMNode]
- [TestScope]
  - [HTMLPageScope]
- [TestEnvironment]
  - [BrowserSetup]
- [Interface]
  - [WebPage]
- [AccessibilityTester]
- [TestConfiguration]

**Example 2**: A complete web page test

```json
{
  "@context": "https://axrl.org/context/web-v1.json",
  "@type": "WebPageTest",
  "timestamp": "2018-09-25T10:04:13.274Z",
  "testSubject": {
    "@type": "WebPage",
    "url": "https://deque.com",
    "state": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  },
  "scope": {
    "@type": "axe-core-api:#include-exclude-object",
    "exclude": ["#footer"]
  },
  "environment": {
    "@type": "BrowserSetting",
    "browser": "chrome",
    "browserVersion": "12.3.4",
    "windowWidth": 1280,
    "windowHeight": 1024
  },
  "tester": {
    "@type": "AccessibilityTestTool",
    "@id": "https://github.com/dequelabs/axe-core/releases/tag/v3.1.2",
    "name": "axe-core",
    "release": "3.1.2",
    "homepage": "https://deque.com/axe/"
  },
  "results": [
    {
      "@type": "TestFailure",
      "impact": "moderate",
      "description": "Web pages must have a title",
      "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/document-title",
      "node": {
        "@type": "DOMNode",
        "html": "<html>...</html>",
        "selector": ":root"
      },
      "remediation": "Add a <title> element to <head>",
      "relatedNodes": []
    },
    {
      "@type": "TestSuccess",
      "description": "Video elements have a caption",
      "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/video-caption",
      "node": {
        "@type": "DOMNode",
        "html": "<div>...</div>",
        "selector": "..."
      }
    },
    {
      "@type": "TestSkip",
      "description": "Video elements have a caption",
      "testDetails": "https://dequeuniversity.com/rules/axe/3.1/video-caption"
    },
    {
      "@type": "TestAbort",
      "test": "axe-core:3.1/video-caption",
      "description": "Video elements have a caption",
      "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/video-caption",
      "node": {
        "@type": "DOMNode",
        "html": "<div>...</div>",
        "selector": "..."
      }
    }
  ]
}
```
