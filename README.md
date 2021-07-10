# Features

- [x] generate forms
- [ ] instant notification on comment
- [ ] QnA forum
- [ ] Course Analytics
- [ ] Road map generator

# TypeScript

## Stateless Functional component (SFC)

```
type SFC<P> = StatelessComponent<P>;
interface StatelessComponent<P> {
 (props: P & { children?: ReactNode }, context?: any): ReactElement<any>;
 propTypes?: ValidationMap<P>;
 contextTypes?: ValidationMap<any>;
 defaultProps?: Partial<P>;
 displayName?: string;
}
```

## Stateful Functional component (SFC)

- Apply types to react hooks like so.

```
useState<{}>("Hello")
```
