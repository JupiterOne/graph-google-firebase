# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 1.0.2/1.0.3 - 2024-03-12

### Added

- Log the error associated to fetch-user missing permissions.

## 1.0.1 - 2022-08-30

### Fixed

- Fixed a bug where `getStepStartStates` method was importing
  `serializedIntegrationConfig` from `test/config` instead from
  `instance.config`.

## 1.0.0 - 2022-08-30

### Added

- Ingest new entities
  - `google_firebase_account`
  - `google_firebase_project`
  - `google_firebase_user`
  - `google_firebase_auth_user`
  - `google_firebase_webapp`
- Build new relationships
  - `google_firebase_account_has_project`
  - `google_firebase_project_has_user`
  - `google_firebase_project_has_auth_user`
  - `google_firebase_project_has_webapp`
