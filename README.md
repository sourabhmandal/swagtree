# Features

- [x] generate forms
- [x] instant notification on comment
- [x] QnA forum
- [ ] Payments

# TypeScript Lessons I learned

## Stateless Functional component (SFC)

To define stateless functional component

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
- To define stateful functional component
- Apply types to react hooks like so.

```
useState<{}>("Hello")
```

# What is SwagTree

This is a linktree clone app with added features

# Motivation

Many times we want to share more than just links to our other social media maybe it's video post, specific blog post, etc. We want to connect with our audiance at a more personal level. Or we just want to sell our products without getting users off the platform. Hence to address this problem I am making _Swagtree_ a one staop destination to share your content at your social-media Homepage.

_One link that links em all_

# What are the features

- Add unlimited number of links in your profile.
- Choose wide array of view types for your link -- current supports _*card*_ and _*link*_.
- Sell paid products in your profile.
- Share your article, book.
- analyse link statistics and visits.
- More features to be added...

# Tech Stack

- Database : MongoDB
- Backend : ExpressJS (NodeJS)
- Frontend : ReactJS

# Project Kanban

| Feature To Add                 |       Currently Working       |                 Compeleted |
| :----------------------------- | :---------------------------: | -------------------------: |
| Enable login with social media |           dashboard           | user registation and login |
|                                | Enable multiply user accounts |

# Database Diagram

![Database Diagram Image](https://github.com/sourabhmandal/swagtree/blob/main/readme_resources/linktree_clone.png)
