# 🧮 Formula Input Component

A custom input field that lets users build formulas using **autocomplete tags**, **natural numbers**, and **operands**, with support for:

* Tag-based structure (not plain text)
* Deleting tags with backspace
* Autocomplete dropdown (powered by React Query)

---

## ✨ Features

* 🔢 **Natural number input** (e.g., `12`, `100`)
* ➕ **Mathematical operators**: `+`, `-`, `*`, `/`, `(`, `)`
* 🔖 **Autocomplete for dynamic tags** (e.g., `Amount`, `Tax`)
* 🧠 **Debounced API fetch** using `react-query`
* 🗑️ **Backspace to delete last tag** when input is empty
* 🎨 **TailwindCSS-based UI**

---

## 📦 Stack

* [React](https://reactjs.org)
* [Zustand](https://github.com/pmndrs/zustand) – local state management
* [React Query](https://tanstack.com/query) – autocomplete suggestions
* [TailwindCSS](https://tailwindcss.com) – styling

---

## 🔧 Setup

```bash
git clone https://github.com/omohemma/lucid
cd lucid
npm install
npm run dev
```

---


## 🔗 Autocomplete API

Currently uses this mock endpoint:

```
https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete
```

> ⚠️ The API does not support filtering, so all data is fetched once and filtered on the client.
