# Ace Editor Mendix 8 Widget

## Prerequisites
Before getting started, you'll need the following installed on your development machine:
- Node.js and NPM
- Yeoman
- Visual Studio Code, WebStorm, or a JavaScript/TypeScript IDE
- Mendix Studio Pro

Since Mendix Studio Pro can only be run on Windows, it's easiest to install the tools above there as well.

## Preparing Your Development Environment for Mendix Widgets
While you can write unit tests for your React components and run via the command line, it's very helpful to test your widget in a real Mendix project as well. Start by creating a blank app, stripping out all of the existing plugins, and create a folder called <code>/CustomWidgets</code> in the <code>/widgets</code> folder of your newly created Mendix project. Note that you can create a Git repository in this nested directory for versioning your widget code independently of your Mendix project.

If you'd like to test with a sample widget first, you can generate the skeleton for using a single command <code>npm install @mendix/generator-widget -g</code>. The Yeoman template walks through numerous options including:
- TypeScript or JavaScript
- Web and hybrid or native phone
- Unit tests, end-to-end tests, or none
- To build your widget, simply use the command npm run dev or npm run build. Note that you have to sync the local project directory manually by pressing F4 as well.

## Installation
Simply run <code>git clone</code> for this repository in <code>/widgets/CustomWidgets</code>.

## Builds
To build your widget, simply use the command <code>npm run dev</code> or <code>npm run build</code>. Note that you have to sync the local project directory manually in Mendix Studio Pro by pressing <code>F4</code> as well.

## Deployment
Running the <code>npm run release</code> produces an MPK file in the <code>/dist</code> folder that can be uploaded easily to the App Store.