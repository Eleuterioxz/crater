import{a as o,d as u}from"./vendor.01d0adc5.js";import{h as s,u as r}from"./main.c43fbacd.js";const y=(g=!1)=>{const h=g?window.pinia.defineStore:u,{global:c}=window.i18n;return h({id:"category",state:()=>({categories:[],currentCategory:{id:null,name:"",description:""}}),getters:{isEdit:t=>!!t.currentCategory.id},actions:{fetchCategories(t){return new Promise((a,i)=>{o.get("/api/v1/categories",{params:t}).then(e=>{this.categories=e.data.data,a(e)}).catch(e=>{s(e),i(e)})})},fetchCategory(t){return new Promise((a,i)=>{o.get(`/api/v1/categories/${t}`).then(e=>{this.currentCategory=e.data.data,a(e)}).catch(e=>{s(e),i(e)})})},addCategory(t){return new Promise((a,i)=>{o.post("/api/v1/categories",t).then(e=>{this.categories.push(e.data.data),r().showNotification({type:"success",message:c.t("settings.expense_category.created_message")}),a(e)}).catch(e=>{s(e),i(e)})})},updateCategory(t){return new Promise((a,i)=>{o.put(`/api/v1/categories/${t.id}`,t).then(e=>{if(e.data){let n=this.categories.findIndex(f=>f.id===e.data.data.id);this.categories[n]=t.categories,r().showNotification({type:"success",message:c.t("settings.expense_category.updated_message")})}a(e)}).catch(e=>{s(e),i(e)})})},deleteCategory(t){return new Promise(a=>{o.delete(`/api/v1/categories/${t}`).then(i=>{let e=this.categories.findIndex(d=>d.id===t);this.categories.splice(e,1),r().showNotification({type:"success",message:c.t("settings.expense_category.deleted_message")}),a(i)}).catch(i=>{s(i),console.error(i)})})}}})()};export{y as u};