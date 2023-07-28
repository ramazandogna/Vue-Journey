<template></template>

<script></script>

<style scoped>
.project {
   margin: 20px auto;
   background-color: #fff;
   padding: 10px 20px;
   border-radius: 5px;
   box-shadow: 1px 2px 3p rgba(0, 0, 0, 0.05);
   border-left: 4px solid turquoise;
}

h3 {
   cursor: pointer;
}

.actions {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.material-icons {
   font-size: 24px;
   margin-left: 10px;
   color: rgba(64, 224, 208, 0.5);
   cursor: pointer;
   font-weight: 500;
   transition: all 0.3s;
}

.material-icons:hover {
   color: rgba(64, 224, 208, 1);
}

.project.complete {
   border-left: 4px solid #e90074;
}

.project.complete .tick {
   color: #e90074;
}

.completeh3 {
   text-decoration: line-through;
}

p {
   text-align: left;
}
</style>
