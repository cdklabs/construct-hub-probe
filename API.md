# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SampleRepository <a name="SampleRepository" id="construct-hub-probe.SampleRepository"></a>

SampleRepository is a repository that only allows configuring its.

#### Initializers <a name="Initializers" id="construct-hub-probe.SampleRepository.Initializer"></a>

```typescript
import { SampleRepository } from 'construct-hub-probe'

new SampleRepository(scope: Construct, id: string, props: SampleRepositoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub-probe.SampleRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#construct-hub-probe.SampleRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub-probe.SampleRepository.Initializer.parameter.props">props</a></code> | <code><a href="#construct-hub-probe.SampleRepositoryProps">SampleRepositoryProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="construct-hub-probe.SampleRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub-probe.SampleRepository.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="construct-hub-probe.SampleRepository.Initializer.parameter.props"></a>

- *Type:* <a href="#construct-hub-probe.SampleRepositoryProps">SampleRepositoryProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub-probe.SampleRepository.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="construct-hub-probe.SampleRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub-probe.SampleRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="construct-hub-probe.SampleRepository.isConstruct"></a>

```typescript
import { SampleRepository } from 'construct-hub-probe'

SampleRepository.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="construct-hub-probe.SampleRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub-probe.SampleRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="construct-hub-probe.SampleRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### SampleRepositoryProps <a name="SampleRepositoryProps" id="construct-hub-probe.SampleRepositoryProps"></a>

Properties for 'SampleRepositoryProps'.

#### Initializer <a name="Initializer" id="construct-hub-probe.SampleRepositoryProps.Initializer"></a>

```typescript
import { SampleRepositoryProps } from 'construct-hub-probe'

const sampleRepositoryProps: SampleRepositoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub-probe.SampleRepositoryProps.property.name">name</a></code> | <code>string</code> | Repository name. |

---

##### `name`<sup>Required</sup> <a name="name" id="construct-hub-probe.SampleRepositoryProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Repository name.

---



