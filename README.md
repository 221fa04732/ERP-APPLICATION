# **ERP Application**

This project is a **comprehensive ERP system** that includes multiple modules:

- **Admission**
- **Library**
- **Transport**
- **Research**
- **Hostel**
- **Event**
- **Placement**
- **Examination**

---

## **Local Setup**

### **Clone the Repository**

Run the following command to clone the project:

```sh
git clone https://github.com/<Your_Github>/ERP-APPLICATION.git
```

---

### **Frontend Setup**

```sh
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

### **Configure Environment Variables**

- Create a **`.env`** file inside `./backend/db` and add the following variables:
  ```sh
  MONGO_URI=your_mongodb_url
  POSTGRESQL_URI=your_postgresql_url
  ```
- Create another **`.env`** file inside `./backend` and add:
  ```sh
  PORT=3000
  ```

## **Backend Setup**

```sh
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the development server
npm start
```
