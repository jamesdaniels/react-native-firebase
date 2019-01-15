/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export type FirebaseOptions = {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  gaTrackingId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  [name: string]: any;
};

export interface FirebaseAppConfig {
  name?: string;
  automaticDataCollectionEnabled?: boolean;
}

export class FirebaseApp {
  readonly name: string;

  readonly options: FirebaseOptions;

  automaticDataCollectionEnabled: boolean;

  delete(): Promise<void>;
}

export interface FirebaseNamespace {
  initializeApp(options: FirebaseOptions, config?: FirebaseAppConfig): FirebaseApp;

  initializeApp(options: FirebaseOptions, name?: string): FirebaseApp;

  app: {
    (name?: string): FirebaseApp;
  };

  apps: FirebaseApp[];

  readonly SDK_VERSION: string;
}