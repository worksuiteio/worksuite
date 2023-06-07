# Worksuite Worksuite Platform

[uri_gauzy]: https://gauzy.co
[uri_license]: https://www.gnu.org/licenses/agpl-3.0.html
[uri_license_image]: https://img.shields.io/badge/License-AGPL%20v3-blue.svg

![visitors](https://visitor-badge.laobi.icu/badge?page_id=worksuiteio.gauzy-platform)
[![License: AGPL v3][uri_license_image]][uri_license]
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/worksuiteio/worksuite)

## 💡 What's New

We released [Worksuite Worksuite Teams](https://github.com/worksuiteio/worksuite-teams) platform for Work & Project Management.  
Please check <https://github.com/worksuiteio/worksuite-teams> and make it ⭐ on GitHub!  
It's built with React / ReactNative stack and connects to headless Worksuite Worksuite Platform APIs.

## 🌟 What is it

[Worksuite® Worksuite™][uri_gauzy] - **Open-Source Business Management Platform** for On-Demand and Sharing Economies.

- **Enterprise Resource Planning** (ERP) software.
- **Customer Relationship Management** (CRM) software.
- **Human Resource Management** (HRM) software with employee **Time and Activity Tracking** functionality.
- **Work and Project Management** software. 

![overview](https://docs.gauzy.co/docs/assets/overview.png)

Worksuite® Worksuite™ Platform is a part of our larger Open Platform for **On-Demand and Sharing Economies** - [Worksuite® Platform™](https://ever.co).

## 🌼 Screenshots

<details>
<summary>Show / Hide Screenshots</summary>

### Web UI

![overview](https://docs.gauzy.co/docs/assets/overview.png)

### Desktop Timer UI (Standard)

![timer](https://docs.gauzy.co/docs/assets/desktop/desktop-timer-small.png)

### Desktop Timer UI (Expanded)

![timer](https://docs.gauzy.co/docs/assets/desktop/desktop-timer-expanded.png)

</details>

## ✨ Features

Main features:

- Human Resources Management (HRM) with Time Management / Tracking and Employees Performance Monitoring
- Customer Relationship Management (CRM)
- Enterprise Resource Planning (ERP)
- Projects / Tasks Management
- Sales Management
- Financial and Cost Management (including _Accounting_, _Invoicing_, etc)
- Inventory, Supply Chain Management and Production Management

More detailed list of the features available in the platform:

- Dashboard (provides overview of different metrics, such as company income / expenses, employees bonuses, etc.)
- Time Management / Time Tracking / Activity Tracking / Timesheets
- Employees Management (register of company employees / contractors, rates of employees, etc.)
- Employees Onboarding / Candidates Interviews
- Contacts Management (Clients / Customers / Leads / etc.)
- Schedules / Appointments / Events
- Project Management / Tasks
- Goals / KPI / Objectives / Key Results
- Sales Pipelines
- Proposals
- Accounting / Invoicing / Estimates
- Billing
- Payments
- Income / Expenses Management
- Time Off Management / Holidays / Approvals
- Inventory
- Equipment / Sharing
- Multiple Organizations Management
- Organization Departments and Teams
- Organization Clients and Vendors
- Help Center / Knowledge Base
- Tags / Labels
- Reports / Insights / Analytics
- Organization and Employee Public Pages
- Integrations (Upwork, HubStaff, etc.)
- Email History / Email Templates
- Data Import / Export
- Roles / Permissions
- Multi-currency
- Multi-lingual
- Dark / Light / Corporate / Material and other Themes

Read more [about Worksuite](https://github.com/worksuiteio/worksuite/wiki/About-Worksuite) and [how to use it](https://github.com/worksuiteio/worksuite/wiki/How-to-use-Worksuite) at your company, on-demand business, freelance business, agency, studio or in-house teams.

## 🔗 Links

- **<https://gauzy.co>** - check more information about the platform at official website.
- **<https://ever.co>** - get more information about our company products.

## 💻 Demo, Downloads, Testing and Production

### Demo

Worksuite Worksuite Platform Demo at <https://demo.gauzy.co>.

Notes:

- Default super-admin user login is `admin@worksuite.co` and password is `admin`
- Content of demo DB resets on each deployment to demo environment (usually daily)
- Demo environment deployed using CI/CD from the `develop` branch

### Downloads

You can download Worksuite Platform, Worksuite Server or Desktop Apps (Windows/Mac/Linux) from the official [Downloads](https://web.gauzy.co/downloads) page.

In addition, all downloads are also available from the following pages:

- [Platform Releases](https://github.com/worksuiteio/worksuite/releases)
- [Server Releases](https://github.com/worksuiteio/worksuite-server/releases)
- [Desktop App Releases](https://github.com/worksuiteio/worksuite-desktop/releases)
- [Desktop Timer App Releases](https://github.com/worksuiteio/worksuite-desktop-timer/releases)

### Production (SaaS)

Worksuite® Worksuite™ Platform SaaS available at <https://app.gauzy.co>.

Note: it's currently in Alpha version / in testing mode, please use with caution!

### Staging

- Worksuite Platform Staging builds (using CI/CD, from the `stage` branch) are available at <https://stage.gauzy.co>
- We are using Staging environment to test releases before they are deployed to production environment
- Our pre-releases of desktop / server apps are built from this environment and can be configured manually (in settings) to connect to Stage API: <https://apistage.gauzy.co>

### Server & Desktop Apps

We have Worksuite Server and two Desktop Apps (for Windows/Mac/Linux):

- Worksuite® Worksuite™ Server - includes Worksuite API, SQLite DB (or connects to external PostgreSQL) and serves Guazy frontend. It allows to quickly run Worksuite Server for multiple clients (browser based or Desktop based). It's recommended option if you want to setup Worksuite Worksuite Platform in the small to medium organizations.

- Worksuite® Worksuite™ Desktop App - includes Worksuite frontend (UI), Worksuite API, SQLite DB, etc., all-in-one! It allows to quickly run the whole Worksuite solution locally, both UI and Timer (for time tracking, optionally of course). In addition, it allows to connect to the external database (e.g. PostgreSQL) or external API (if you have Worksuite Server with API / DB installed on different computer or if you want to connect to our live API). It's recommended option if you want to try Worksuite quickly / for personal use or if you want to connect to Worksuite Server in the "client-server" configuration (and use Desktop App instead of web browser).

- Worksuite® Worksuite™ Desktop Timer App - allows to run Time & Activity Tracking for employees (agent) with screenshots and activity monitoring. Recommended to setup by organization employees as long as they are not interested in other Worksuite Platform features (e.g. accounting) and only need to track work time.

More information about our Server & Desktop Apps:

- Download for your OS from the official [Downloads](https://web.gauzy.co/downloads) page or see section "Download" above for other links to our releases pages.
- Setup Worksuite Server with default choices in Setup Wizard and run it.
- You can also setup Worksuite Desktop App (can run independently or connect to Worksuite Server) or Worksuite Desktop Timer App (should be connected to Worksuite Server)
- You can login with `admin@worksuite.co` and password `admin` to check Admin functionality if you installed Worksuite Server or Worksuite Desktop App. Note: such Admin user is not an employee, so you will not be able to track time.
- You can login with `employee@worksuite.co` and password `123456` to check Employee related functionality in Worksuite UI or to run Desktop Timer from "Employee" perspective (such user is an Employee and can track time).
- If you install Worksuite Server, it is possible to connect to it using browser (by default on <http://localhost:4200>) or using Worksuite Desktop Apps (make sure to configure Desktop apps to connect to Worksuite API on <http://127.0.0.1:3000/api> because it's where Worksuite Server API runs by default).
- You can read more information about our Desktop Apps in the [Desktop Apps Wiki Page](https://github.com/worksuiteio/worksuite/wiki/Worksuite-Desktop-Apps) and about our Server in the [Server Wiki Page](https://github.com/worksuiteio/worksuite/wiki/Worksuite-Server).

## 🧱 Technology Stack and Requirements

- [TypeScript](https://www.typescriptlang.org) language
- [NodeJs](https://nodejs.org) / [NestJs](https://github.com/nestjs/nest)
- [Nx](https://nx.dev)
- [Angular](https://angular.io)
- [RxJS](http://reactivex.io/rxjs)
- [TypeORM](https://github.com/typeorm/typeorm)
- [Ngx-admin](https://github.com/akveo/ngx-admin)

For Production, we recommend:

- [PostgreSQL](https://www.postgresql.org)
- [PM2](https://github.com/Unitech/pm2)

Note: thanks to TypeORM, Worksuite will support lots of DBs: SQLite (default, for demos), PostgreSQL (development/production), MySql, MariaDb, CockroachDb, MS SQL, Oracle, MongoDb and others, with minimal changes.

#### See also README.md and CREDITS.md files in relevant folders for lists of libraries and software included in the Platform, information about licenses and other details

## 📄 Documentation

Please refer to our official [Platform Documentation](https://docs.gauzy.co) and to our [Wiki](https://github.com/worksuiteio/worksuite/wiki) (WIP).

## 🚀 Quick Start

### With Docker Compose

- Clone repo.
- Make sure you have Docker Compose [installed locally](https://docs.docker.com/compose/install).
- Copy `.env.compose` file into `.env` file in the root of mono-repo (file contains default env variables definitions). Important: file `.env.compose` is different to `.env.sample` in some settings, please make sure you use correct one!
- Run `docker-compose -f docker-compose.demo.yml up`, if you want to run the platform using our prebuild Docker images. _(Note: it uses latest images pre-build automatically from head of `master` branch using Github CI/CD.)_
- Run `docker-compose up`, if you want to build everything (code and Docker images) locally. _(Note: this is extremely long process, option above is much faster.)_
- :coffee: time... It might take some time for our API to seed fake data in the DB during the first Docker Compose run, even if you used prebuild Docker images.
- Open <http://localhost:4200> in your browser.
- Login with email `admin@worksuite.co` and password: `admin` for Super Admin user.
- Login with email `employee@worksuite.co` and password: `123456` for Employee user.
- Enjoy!

Together with Worksuite, Docker Compose will run following:

- [PostgreSQL](https://www.postgresql.org) - Primary Database.
- [Pgweb](https://github.com/sosedoff/pgweb) - Cross-platform client for PostgreSQL DBs, available on <http://localhost:8081>.
- [Redis](https://github.com/redis/redis) - In-memory data store/caching.
- [ElasticSearch](https://github.com/elastic/elasticsearch) - Search Engine.
- [Dejavu](https://github.com/appbaseio/dejavu) - Web UI for ElasticSearch, available on <http://localhost:1358>.
- [MinIO](https://github.com/minio/minio) - Multi-Cloud ☁️ Object Storage (AWS S3 compatible).
- [Cube](https://github.com/cube-js/cube) - "Semantic Layer" used for Reports, Dashboards, Analytics and other BI related features, with UI available on <http://localhost:4000>.

### Manually

#### Required

- Install [NodeJs](https://nodejs.org/en/download) LTS version or later, e.g. 18.x.
- Install [Yarn](https://github.com/yarnpkg/yarn) (if you don't have it) with `npm i -g yarn`.
- Install NPM packages and bootstrap solution using command `yarn bootstrap`.
- If you will need to make code changes (and push to Git repo), please run `yarn prepare:husky`.
- Adjust settings in the [`.env.local`](https://github.com/worksuiteio/worksuite/blob/develop/.env.local) which used in local runs.
- Alternatively, you can copy [`.env.sample`](https://github.com/worksuiteio/worksuite/blob/develop/.env.sample) to `.env` and change default settings there, e.g. database type, name, user, password, etc.
- Run both API and UI with single command: `yarn start`.
- Open Worksuite UI on <http://localhost:4200> in your browser (API runs on <http://localhost:3000/api>).
- Login with email `admin@worksuite.co` and password: `admin` for Super Admin user.
- Login with email `employee@worksuite.co` and password: `123456` for Employee user.
- Enjoy!

Notes:

- during the first API start, DB will be automatically seed with minimum set of initial data if no users found.
- you can run seed any moment manually (e.g. if you changed entities schemas) with `yarn seed` command to re-initialize DB (warning: unsafe for production!).
- it is possible to run generation of extremely large amount of fake data for demo purposes / testing with `yarn seed:all` (warning: takes ~10 min to complete)

#### Optional / Recommended for Production

- Optionally (recommended for production) install and run [PostgreSQL](https://www.postgresql.org) version 14 or later. Note: other DB can be configured manually in TypeORM. The default DB is set to SQLite (recommended for testing/demo purposes only).
- Optionally (recommended for production) install and run [Redis](https://github.com/redis/redis). Note: the platform will work without Redis using in-memory caching strategy instead of distributed one (recommended for testing/demo purposes only).
- Optionally (recommended for production) install and run [ElasticSearch](https://github.com/elastic/elasticsearch). Note: the platform will work without ElasticSearch using DB build-in search capabilities (recommended for testing/demo purposes only).
- Optionally install and run [MinIO](https://github.com/minio/minio) or [LocalStack](https://github.com/localstack/localstack). Note: the platform will work without MinIO / LocalStack or other S3 compatible storage using local filesystem based storage (recommended for testing/demo purposes only). For production, we recommend to use Wasabi or AWS S3 storage.
- Optionally (recommended for production) install and run [Cube](https://github.com/cube-js/cube).

### Production

- See [Setup Worksuite for Client Server](https://github.com/worksuiteio/worksuite/wiki/Setup-Worksuite-for-Client-Server) for more information about production setup on your servers.
- For simple deployments scenarios (e.g. for yourself or your own small organization), check our [Kubernetes configurations](https://github.com/worksuiteio/worksuite/tree/develop/.deploy/k8s), which we are using to deploy Worksuite demo into [DigitalOcean k8s cluster](https://www.digitalocean.com/products/kubernetes).
- In addition, check [Worksuite Pulumi](https://github.com/worksuiteio/worksuite-pulumi) project (WIP), it makes complex Clouds deployments possible with a single command (`pulumi up`). Note: it currently supports AWS EKS (Kubernetes) for development and production with Application Load Balancers and AWS RDS Serverless PostgreSQL DB deployments. We also implemented deployments to ECS EC2 and Fargate Clusters in the same Pulumi project.

## 💌 Contact Us

- [Worksuite.co Website Contact Us page](https://ever.co/contacts)
- [Slack Community](https://join.slack.com/t/gauzy/shared_invite/enQtNzc5MTA5MDUwODg2LTI0MGEwYTlmNWFlNzQzMzBlOWExNTk0NzAyY2IwYWYwMzZjMTliYjMwNDI3NTJmYmM4MDQ4NDliMDNiNDY1NWU)
- [Discord Chat](https://discord.gg/hKQfn4j)
- [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/gauzy)
- [![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/worksuiteio/worksuite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/evereq?utm_source=github&utm_medium=button&utm_term=evereq&utm_campaign=github)
- For business inquiries: <mailto:gauzy@worksuite.co>
- Please report security vulnerabilities to <mailto:security@worksuite.co>
- [Worksuite Platform @ Twitter](https://twitter.com/gauzyplatform)
- [Worksuite Platform @ Facebook](https://www.facebook.com/gauzyplatform)

## 🔐 Security

Worksuite® Worksuite™ follows good security practices, but 100% security cannot be guaranteed in any software!
Worksuite® Worksuite™ is provided AS IS without any warranty. Use at your own risk!
See more details in the [LICENSE](LICENSE.md).

In a production setup, all client-side to server-side (backend, APIs) communications should be encrypted using HTTPS/WSS/SSL (REST APIs, GraphQL endpoint, Socket.io WebSockets, etc.).

If you discover any issue regarding security, please disclose the information responsibly by sending an email to <mailto:security@worksuite.co> or on  [![huntr](https://cdn.huntr.dev/huntr_security_badge_mono.svg)](https://huntr.dev) and not by creating a GitHub issue.

## 🛡️ License

We support the open-source community. If you're building awesome non-profit/open-source projects, we're happy to help and will provide (subject to [acceptance criteria](https://github.com/worksuiteio/worksuite/wiki/Free-license-and-hosting-for-Non-profit-and-Open-Source-projects)) Worksuite Worksuite Enterprise edition license and free hosting option! Feel free to contact us at <mailto:ever@worksuite.co> to make a request. More details explained in our [Wiki](https://github.com/worksuiteio/worksuite/wiki/Free-license-and-hosting-for-Non-profit-and-Open-Source-projects).

This software is available under following licenses:

- [Worksuite® Worksuite™ Platform Community Edition](https://github.com/worksuiteio/worksuite/blob/master/LICENSE.md#gauzy-platform-community-edition-license)
- [Worksuite® Worksuite™ Platform Small Business](https://github.com/worksuiteio/worksuite/blob/master/LICENSE.md#gauzy-platform-small-business-license)
- [Worksuite® Worksuite™ Platform Enterprise](https://github.com/worksuiteio/worksuite/blob/master/LICENSE.md#gauzy-platform-enterprise-license)

#### The default Worksuite® Worksuite™ Platform license, without a valid Worksuite® Worksuite™ Platform Enterprise or Worksuite® Worksuite™ Platform Small Business License agreement, is the Worksuite® Worksuite™ Platform Community Edition License

#### Please see [LICENSE](LICENSE.md) for more information on licenses. You can also [compare our offering](https://ever.co/compare-gauzy/#compare)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fworksuiteio%2Fgauzy.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fworksuiteio%2Fgauzy?ref=badge_large)

## ™️ Trademarks

**Worksuite**® is a registered trademark of [Worksuite Co. LTD](https://ever.co).
**Worksuite® Demand™**, **Worksuite® Worksuite™** and **Worksuite® OpenSaaS™**  are all trademarks of [Worksuite Co. LTD](https://ever.co).

The trademarks may only be used with the written permission of Worksuite Co. LTD. and may not be used to promote or otherwise market competitive products or services.

All other brand and product names are trademarks, registered trademarks or service marks of their respective holders.

## 🍺 Contribute

- Please give us :star: on Github, it **helps**!
- You are more than welcome to submit feature requests in the [separate repo](https://github.com/worksuiteio/feature-requests/issues)
- Pull requests are always welcome! Please base pull requests against the _develop_ branch and follow the [contributing guide](.github/CONTRIBUTING.md).

## 💪 Thanks to our Contributors

See our contributors list in [CONTRIBUTORS.md](https://github.com/worksuiteio/worksuite/blob/develop/.github/CONTRIBUTORS.md).
You can also view full list of our [contributors tracked by Github](https://github.com/worksuiteio/worksuite/graphs/contributors).

<img src="https://contributors-img.web.app/image?repo=worksuiteio/worksuite" />

## ©️ Copyrigh

#### Copyright © 2019-present, Worksuite Co. LTD. All rights reserved

[![huntr](https://cdn.huntr.dev/huntr_security_badge_mono.svg)](https://huntr.dev)
[![Circle CI](https://circleci.com/gh/worksuiteio/worksuite.svg?style=svg)](https://circleci.com/gh/worksuiteio/worksuite)
[![codecov](https://codecov.io/gh/worksuiteio/worksuite/branch/master/graph/badge.svg)](https://codecov.io/gh/worksuiteio/worksuite)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8c46f9eb9df64aa9859dea4d572059ac)](https://www.codacy.com/gh/worksuiteio/worksuite/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=worksuiteio/worksuite&amp;utm_campaign=Badge_Grade)
[![DeepScan grade](https://deepscan.io/api/teams/3293/projects/16703/branches/363423/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3293&pid=16703&bid=363423)
[![Known Vulnerabilities](https://snyk.io/test/github/worksuiteio/worksuite/badge.svg)](https://snyk.io/test/github/worksuiteio/worksuite)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/worksuiteio/worksuite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/worksuiteio/worksuite/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/worksuiteio/worksuite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/worksuiteio/worksuite/context:javascript)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fworksuiteio%2Fworksuite.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fworksuiteio%2Fgauzy?ref=badge_shield)
[![Crowdin](https://badges.crowdin.net/e/1d2b3405d65a56ec116d0984fd579cc9/localized.svg)](https://ever.crowdin.com/gauzy)

## 🔥 P.S

- If you interested to run on-demand (delivery) or digital marketplace business, check open-source [Worksuite Demand Platform](https://github.com/worksuiteio/ever-demand)
- [We are Hiring: remote TypeScript / NestJS / Angular developers](https://github.com/worksuiteio/jobs#available-positions)
