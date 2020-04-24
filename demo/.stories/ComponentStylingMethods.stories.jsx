import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withPerformance } from 'storybook-addon-performance';
import { storiesOf } from '@storybook/react';
import InlineCSSExampleComponent from 'ComponentStylingMethods/InlineCSSExampleComponent';
import InlineCSSExampleComponentREADME from 'ComponentStylingMethods/InlineCSSExampleComponent/README.md';
import CSSExampleComponent from 'ComponentStylingMethods/CSSExampleComponent';
import CSSExampleComponentREADME from 'ComponentStylingMethods/CSSExampleComponent/README.md';
import SCSSExampleComponent from 'ComponentStylingMethods/SCSSExampleComponent';
import SCSSExampleComponentREADME from 'ComponentStylingMethods/SCSSExampleComponent/README.md';
import CSSInJSExampleComponent from 'ComponentStylingMethods/CSSInJSExampleComponent';
import CSSInJSExampleComponentREADME from 'ComponentStylingMethods/CSSInJSExampleComponent/README.md';
import StyledExampleComponent from 'ComponentStylingMethods/StyledExampleComponent';
import StyledExampleComponentREADME from 'ComponentStylingMethods/StyledExampleComponent/README.md';
import CSSModuleExampleComponent from 'ComponentStylingMethods/CSSModuleExampleComponent';
import CSSModuleExampleComponentREADME from 'ComponentStylingMethods/CSSModuleExampleComponent/README.md';
import SCSSModuleExampleComponent from 'ComponentStylingMethods/SCSSModuleExampleComponent';
import SCSSModuleExampleComponentREADME from 'ComponentStylingMethods/SCSSModuleExampleComponent/README.md';

storiesOf('Component Styling Methods', module)
  .addDecorator(withInfo)
  .addDecorator(withPerformance)
  .add('InlineCSSExampleComponent', () => (
    <InlineCSSExampleComponent />
  ), { info: InlineCSSExampleComponentREADME })
  .add('CSSExampleComponent', () => (
    <CSSExampleComponent />
  ), { info: CSSExampleComponentREADME })
  .add('SCSSExampleComponent', () => (
    <SCSSExampleComponent />
  ), { info: SCSSExampleComponentREADME })
  .add('CSSInJSExampleComponent', () => (
    <CSSInJSExampleComponent />
  ), { info: CSSInJSExampleComponentREADME })
  .add('StyledExampleComponent', () => (
    <StyledExampleComponent />
  ), { info: StyledExampleComponentREADME })
  .add('CSSModuleExampleComponent', () => (
    <CSSModuleExampleComponent />
  ), { info: CSSModuleExampleComponentREADME })
  .add('SCSSModuleExampleComponent', () => (
    <SCSSModuleExampleComponent />
  ), { info: SCSSModuleExampleComponentREADME });
