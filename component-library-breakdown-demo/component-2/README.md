# component-2

## Commands

### start

Builds the component library in watch mode, which will build on change.

#### start example

```bash
yarn start
```

### build

Builds the component library.

#### build example

```bash
yarn build
```

### storybook

Starts the storybook server which is used for development.
The server can be accessed on `localhost:9009`.

#### storybook example

```bash
yarn storybook
```

### build-storybook

Builds the storybook to allow for hosting of online documentation.
The build is output to the docs folder.

#### build-storybook example

```bash
yarn build-storybook
```

### test

Runs the jest test suite. tests can be written in the tests directory.

#### test example

```bash
yarn test
```

### lint

Runs eslint, which is a linter used to enforce code style.

#### lint example

```bash
yarn lint
```

### lint:fix

Runs eslint in auto-fix mode which will fix an auto-fixable styling issues.

#### lint:fix example

```bash
yarn lint:fix
```

### stylelint

Runs stylelint, which is a linter used to enforce code style for scss style sheets and modules.

#### stylelint example

```bash
yarn stylelint
```

### stylelint:fix

Runs stylelint in auto-fix mode which will fix an auto-fixable styling issues.

#### stylelint:fix example

```bash
yarn stylelint:fix
```
