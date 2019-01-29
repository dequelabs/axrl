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
      "@type": "TestResult",
      "outcome": "failed",
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
      "@type": "TestResult",
      "test": "axe-core:color-contrast",
      "outcome": "passed",
      "node": {
        "@type": "DOMNode",
        "html": "<h1>Welcome</h1>",
        "selector": "h1"
      }
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

## Structures

## Types

- UserInterfaceTest
  - WebPageTest
  - AndroidViewTest
  - IOSViewTest
  - WindowsAppTest
- TestResult
- Node
  - DOMNode

```json
{
  "@context": "https://axrl.org/testrun-context.json",
  "@type": "WebPageTest",
  "url": "https://deque.com",
  "timestamp": "2018-09-25T10:04:13.274Z",
  "scope": {},
  "state": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
  "settings": {
    "@type": "SeleniumSettings",
    "browser": "chrome",
    "browserVersion": "12.3.4",
    "screenWidth": 1280,
    "screenHeight": 1024
  },
  "results": [
    {
      "@type": "TestResult",
      "test": "axe-core:color-contrast",
      "outcome": "failed",
      "impact": "moderate",
      "node": {
        "@type": "DOMNode",
        "html": "<div>...</div>",
        "selector": "..."
      },
      "remediation": {},
      "relatedNodes": []
    }
  ],
  "testDescription": [
    {
      "@type": "Rule",
      "@id": "axe-core:color-contrast"
    }
  ]
}
```
