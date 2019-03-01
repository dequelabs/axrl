---
path: '/docs/spec'
date: '2017-11-07'
title: 'Accessibility Reporting Language (AXRL)'
---

## Single run example

The following is an example of a test for a single page, such as that produced by axe-core. Most things have not been changed, although there are a few notable differences:

- Types have been added to all objects. This is in line with a best practice for linked data
- "groupings" based on data have been merged. Any / all / none are no longer separate properties but are in an array, with its the type of remediation being listed as a key. Similarly for violations, passes, etc.
- Rule information has been put in its own object, rather than mix that data with the test results. This separation lets us express multiple results for the same rule.

```json
{
  // Information about the page
  "@type": "WebPageDescription",
  "name": "Deque Homepage",
  "url": "http://deque.com",

  // TODO: Environment variables... should I include audit info here?
  "testedWith": {
    "@type": "Software",
    "name": "axe-core",
    "version": "3.1.2"
  },

  "testResults": [
    {
      // TODO: Should this be a reverse relationship?
      "@type": "UITestResult",
      "outcome": "failed",
      "impact": "minor",

      // Put "static" info about the rule in its own object
      "testDescription": {
        "@type": "TestDescription",
        "@id": "axe-core:duplicate-id",
        "help": "id attribute value must be unique", // Maps to dct:title
        "description": "Ensures every id attribute value is unique",
        "requirementOf": [
          "wcag20:parsing",
          "wcag20:level_a"
        ],
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/duplicate-id",
        "tags": ["cat:color", "wcag2a", "wcag411"]
      },

      "nodeResults": [
        {
          // First node
          "@type": "ApplicableNodeResult",
          "impact": "minor",
          "meetsRequirement": false, // This node failed
          // Put node properties into its own object
          "targetNode": {
            "@type": "DOMNodeDescription",
            "html": "<div>...</div>",
            "selector": ["div"]
          },
          "relatedNodes": [
            {
              "@type": "DOMNodeDescription",
              "html": "<div>...</div>",
              "selector": ["div"]
            }
          ],
          "remediation": [
            {
              "@type": "ResolveAll",
              "message": "fix the following",
              "remediation": [
                "Document has multiple static elements with the same id attribute"
              ]
            }
          ]
        },
        {
          // Second node
          "@type": "ApplicableNodeResult",
          "meetsRequirement": true, // This node passed
          "impact": null,
          "targetNode": {
            "html": "<div>...</div>",
            "selector": ["div"]
          }
        }
      ]
    }
  ]
}
```

## Goals

Support accessibility results for:

- [x] Multiple platforms, including, web, iOS, Android and Windows.
- [x] Make it easy to generate from existing products, particularly axe-core
- [x] Support result aggregation
- [x] Can function as a test case language
- Can easily be filtered for:
  - [x] Number of issues
  - [x] Level of impact
- [x] Can be used to express Passed, Failed, Inapplicable, and Unknown
- [ ] Include remediation information
- [ ] Can be used to generate bug tickets and user stories
- [ ] Have it extend established semantic web concepts where they make sense
- [ ] Multiple modalities, including fully automated, tool assisted and manual testing
- [ ] Allows for localisation of results
- [ ] Can be used to express a confidence level
- [ ] Can store environmental information for reproducing results

## Object Types

### TestDescription

A TestDescription defines a test, such as a rule in axe-core or a checkpoint in the Deque Way. Accessibility testing is often broken down into different layers. For example, WCAG 2.1 Level A has 30 Success Criteria. Each success criteria is again broken down by different tools into different rules or checkpoints. This relationship can be expressed through the `requirementOf` property. When the outcome of a test is `failed`, all tests listed in `requirementOf` are also automatically `failed`.

#### TestDescription Example

```json
{
  "@type": "TestDescription",
  "@id": "axe-core:duplicate-id",
  "help": "id attribute value must be unique", // Maps to dct:title
  "description": "Ensures every id attribute value is unique",
  "requirementOf": ["wcag20:parsing", "wcag20:level_a"],
  "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/duplicate-id?application=AxeChrome",
  "tags": ["cat:color", "wcag2a", "wcag411"]
}
```

#### TestDescription Schema

```json
{
  "@id": "TestDescription",
  "@type": "Class",
  "comment": "A description of an accessibility test",
  "properties": [{
    "@id": "name",
    "@type": "Property",
    "alternateName": "help",
    "rangeIncludes": "Text",
    "comment": "Short text describing the topic or purpose of the test",
  }, {
    "@id": "URL",
    "@type": "Property",
    "alternateName": "helpUrl",
    "rangeIncludes": "Text",
    "comment": "URL that provides more information about the specifics of accessibility test.",
  }, {
    "@id": "description",
    "@type": "Property",
    "rangeIncludes": "Text",
    "comment": "Full plain language description of the test.",
  }, {
    "@id": "requirementOf",
    "@type": "Property",
    "rangeIncludes": "TestDescription",
    "comment": "A list of tests that fail when the result of the TestDescription fails. For example,
    if an axe-core rule for WCAG 2.1 SC 1.1.1 fails, than that SC also fails.",
  }, {
    "@id": "tags",
    "@type": "Property",
    "rangeIncludes": "Text",
    "comment": "A list of strings used to give free-form taxonomy and categorisation to an test.",
  }]
}
```

### UIDescription

A UIDescription is a description of the state of the user interface at the time that a test was performed. The goal is to capture enough information about the user interface the moment it was tested, to enable someone familiar with the product to either reproduce issues or verify that they have been resolved. An app, be it a web app or a native app, can often exist in a variety of states. Changes in state of the user interface should result in a different UIDescription.

There is no universal way of capturing the state of an application. At best, an approximation of the state can be made. Each platform should have its own extension of UIDescription, such as WebPageDescription, or AndroidAppDescription. These platform specific types can be used to capture actions that put the app in the tested state.

#### UIDescription Example

```json
{
  "@type": "WebPageDescription",
  "name": "Deque Homepage",
  "url": "http://deque.com",
  "resources": [
    {
      "url": "http://deque.com",
      "mimetype": "text/html",
      "sri": "sha256-10kIurI2DW5bjegHOgc/MMSHiiXK2CAVWCQfoN6h0fs=",
      "triggeredEvents": [
        {
          "type": "mouseover",
          "...": "..."
        }
      ]
    }
  ]
}
```

#### UIDescription Schema

```json
"TODO"
```

### UITestResult

The UITestResult object describes the result of a test applied to a user interface in a particular state. The description of the test is recorded in `testDescription` and the description of the user interface in `interface`. Information about which node passed or failed is expressed in the `nodeResults` property.

The `outcome` can be either `passed`, `failed`, `inapplicable`, or `incomplete`. The `impact` can be `minor`, `moderate`, `serious`, or `critical` when the outcome is `failed`. For all other outcomes the `impact` must be `null`.

#### UITestResult Example

```json
{
  "@type": "UITestResult",
  "outcome": "failed",
  "impact": "minor",
  // Note: `test_description` and `interface` can be expressed through through an
  //  internal ID, an object literal, or the @reverse relationship.
  "testDescription": "_:rule123",
  "interface": "_:hoempage",
  "nodeResults": [
    {
      "@type": "ApplicableNodeResult",
      "...": "..."
    },
    {
      "@type": "ApplicableNodeResult",
      "...": "..."
    }
  ]
}
```

#### UITestResult Schema

```json
{
  "@id": "UITestResult",
  "@type": "Class",
  "comment": "The result of testing a user interface.",
  "properties": [
    {
      "@id": "outcome",
      "@type": "Property",
      "rangeIncludes": "earl:OutcomeValue",
      "comment": "The value returned after performing a test."
    },
    {
      "@id": "impact",
      "@type": "Property",
      "rangeIncludes": "ImpactValue",
      "comment": "The severity on users of getting a failed outcome"
    },
    {
      "@id": "testDescription",
      "@type": "Property",
      "rangeIncludes": "TestDescription",
      "comment": ""
    },
    {
      "@id": "interface",
      "@type": "Property",
      "rangeIncludes": "UIDescription",
      "comment": ""
    },
    {
      "@id": "nodeResults",
      "@type": "Property",
      "rangeIncludes": "ApplicableNodeResult",
      "comment": ""
    }
  ]
}
```

### ApplicableNodeResult

A NodeTestResult describes if a node that is applicable in an accessibility test meets that test's expectation(s). For example, a rule that checks if all `img` elements have an accessible name, there would be one NodeTestResult for each `img` element. The `meetsExpecations` property is `true` when the `node` has an accessible name, and `false` when it doesn't.

**Important:** Unlike axe-core's current format, relatedNodes are not attached to a specific
"check" (expressed in "remediation").

**TODO:** How should we ensure there is always a relationship to a UITestResult? Or should this have a relationship to the test instead?

#### ApplicableNodeResult Example

```json
{
  "@type": "ApplicableNodeResult",
  "meetsExpecations": false,
  "impact": "minor",
  "targetNode": {
    "@type": "DOMNodeDescription",
    "...": "..."
  },
  "remediation": [
    {
      "@type": "Remediaton",
      "...": "..."
    }
  ],
  "relatedNodes": [
    {
      "@type": "DOMNodeDescription",
      "...": "..."
    },
    {
      "@type": "DOMNodeDescription",
      "...": "..."
    }
  ]
}
```

#### ApplicableNodeResult Schema

```json
{
  "@id": "ApplicableNodeResult",
  "@type": "Class",
  "comment": "",
  "properties": [
    {
      "@id": "meetsExpectation",
      "@type": "Property",
      "rangeIncludes": "Boolean",
      "comment": ""
    },
    {
      "@id": "impact",
      "@type": "Property",
      "rangeIncludes": "ImpactValue",
      "comment": ""
    },
    {
      "@id": "targetNode",
      "@type": "Property",
      "rangeIncludes": "NodeDescription",
      "comment": ""
    },
    {
      "@id": "relatedNodes",
      "@type": "Property",
      "rangeIncludes": "NodeDescription",
      "comment": ""
    },
    {
      "@id": "remediation",
      "@type": "Property",
      "rangeIncludes": "Remediation",
      "comment": ""
    }
  ]
}
```

### Remediation

### NodeDescription

NodeDescription is used to describe identifying characteristics of a node in a user interface. Which characteristics are needed depends on what platform. NodeDescription is an abstract type from which platform specific types can be extended. See [Platform Specific Types](#platform-specific-types) for details about different platforms.

### ImpactValue

<dl>
  <dt id="minor">minor</dt>
  <dd></dd>
  <dt id="moderate">moderate</dt>
  <dd></dd>
  <dt id="serious">serious</dt>
  <dd></dd>
  <dt id="critical">critical</dt>
  <dd></dd>
</dl>

## Platform Specific Types

Abstract types in the base AXRL spec have been extended for different platforms, including web, Android, iOS and Windows.

### Web Types

For details see [AXRL for web](web.md).

| Abstract type       | Web type                                        |
| ------------------- | ----------------------------------------------- |
| SoftwareDescription | [WebSiteDescription](web.md#WebSiteDescription) |
| UIDescription       | [WebPageDescription](web.md#WebPageDescription) |
| NodeDescription     | [DOMNodeDescription](web.md#DOMNodeDescription) |

## Test Descriptions

```ts
interface TestDescription {
  type: 'TestDescription'
  id: string
  description?: string
  help?: string
  helpUrl?: string
  tags?: TagValue[]
  aggregates?: TestDescription[] // Things that fail when this rule fails, e.g. WCAG success criteria / conformance level(s)
  testResults?: TestResult[]
}
```

## Test Results

```ts
interface UITestResult {
  type: 'UITestResult'
  test: TestDescription
  user_interface: UserInterface
  outcome: Outcome
  nodeResults: ApplicableNodeResult[]
}

interface ApplicableNodeResult {
  type: 'ApplicableNodeResult'
  target_node: NodeDescription
  meets_rquirement: Boolean | 'unknown'
  impact: Impact | Null
  related_nodes?: NodeDescription[]
  remediation?: Remediation | Remediation[],
}

enum Outcome {
  Passed = 'earl:passed',
  Failed = 'earl:failed',
  Inapplicable = 'earl:inapplicable',
  Incomplete = 'earl:incomplete'
}

enum Impact = {
  Minor = 'minor',
  Moderate = 'moderate',
  Serious = 'serious',
  Critical = 'critical'
}

interface Remediation {
  type: 'Remediation'
  category: 'any' | 'all'
  description: string // Example: Solve all of the following
  messages: string[]
  data: Object
}
```

## Audits

```ts
// Software extends SoftwareProject
// Website extends SoftwareProject

interface AuditResult {
  type: 'AuditResult'
  startDate: DateTime
  endDate: DateTime
  // TODO, Section 508, Air Carrier Access Act (ACAA), WCAG 2.0 Smoke Test, etc.
  // testStandard: AccessibilityStandard
  // The lead auditor, the person or tool responsible for the correctness of the results
  auditor: Auditor
  // Secondary auditors, if some of the test results were produced by other tools / individuals
  co_auditors?: Auditor[]

  configuration: Unknown // from Comply, scan configuration and scripts

  tests: TestDefinition[]
  sample: UserInterface[]
  test_results: TestResult[]

  // environment? // What is this?
  // release? // What is this?
  // platform? // What is this?
  // assistive_technology? // What is this?
}

// TODO: Should issues stay grouped by rule?
interface Scope {}
interface URI {}
interface DateTime {}
interface Auditor {}
interface Environment {}
interface TestTarget {
  html: String // outerHTML code
  target: String[] | String[][] // css selector
}

interface AccessibilityStandard {}
```

## SoftwareProjects, User Interfaces and Nodes

```ts
interface InterfaceDescription {
  uri: URI
  testResults: TestResult[]
}

interface NodeDescription {}

interface SoftwareProject {
  name: String
  description?: String
  uri?: String
  owner?: any // TODO
  scope?: any // TODO
  subcomponents?: SoftwareProject[]
  // The result of one or more audits
  auditData?: AuditResult | AuditResult[]
  testConfigurations?: unknown
}
```

### Web interfaces and DOM nodes

```ts
interface DOMNodeDescription extends NodeDescription {
  id: string
  selector: string
  source: string
  accessibleName?: string
  // ancestory? // It's position from the root
}

interface WebPageDescription extends InterfaceDescription {
  url: URI
  crawlerData?: CrawlerData // TODO: Define this
  grouping?: PageCollection[] // TODO: define this
  source?: string
  assets?: string[]
}
```

### Windows interfaces and ??? nodes

TODO

### Android interfaces and ??? nodes

TODO

### iOS interfaces and ??? nodes

TODO

## Transforming axe-core format

```ts
interface AxeResults {
  url: string
  timestamp: string
  passes: Result[]
  violations: Result[]
  incomplete: Result[]
  inapplicable: Result[]
}

interface Result {
  description: string
  help: string
  helpUrl: string
  id: string
  impact: ImpactValue
  tags: TagValue[]
  nodes: NodeResult[]
}

interface NodeResult {
  html: string
  impact: ImpactValue
  target: string[]
  any: CheckResult[]
  all: CheckResult[]
  none: CheckResult[]
  failureSummary?: string
}

interface CheckResult {
  id: string
  impact: string
  message: string
  data: any
  relatedNodes?: RelatedNode[]
}

interface RelatedNode {
  target: string[]
  html: string
}
```

TODO:

From Comply:

- Accessibility “issue” information
  - axe result data
  - application mapped severity
  - user-supplied comments
  - user-supplied remediation suggestions
  - user-supplied assignee
  - user-supplied labels
- Organizations
- Projects
- Scan configuration
- Recorded scripts
