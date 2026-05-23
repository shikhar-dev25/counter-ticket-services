
## Prerequisites

- Node.js (v18+)
- Angular CLI:
  ```bash
  npm install -g @angular/cli
````

* JSON Server:

  ```bash
  npm install -g json-server
  ```

## Installation

```bash
git clone <your-repo-url>
cd railway-ticket-app
npm install
```

## Running the Application

### Terminal 1 - Start JSON Server

```bash
cd mock-api
json-server --watch db.json --port 3000
```

### Terminal 2 - Start Angular

```bash
ng serve
```

## Access

`http://localhost:4200`

## Test Credentials

### Ticket 1

* **PNR:** `1234567890`
* **Train Number:** `12345`
* **OTP:** `123456`

### Ticket 2

* **PNR:** `9876543210`
* **Train Number:** `54321`
* **OTP:** `654321`

## Features

* Ticket verification with PNR validation
* OTP-based authentication
* Passenger cancellation
* Boarding point modification
* Multi-language support (English/Hindi)

## Tech Stack

* Angular 19 (Standalone Components)
* JSON Server (Mock API)
* Reactive Forms
* TypeScript

---

**Developed as part of internship project**

```

Save it as **`README.md`** in your project root.
```
