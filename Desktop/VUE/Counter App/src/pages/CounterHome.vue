<template>
<div>
   <h1> Welcome to My Counter Page </h1>
   <div>
   <img alt="Counter logo" :src="image">
   </div>
   </div>
</template>


<script>
import image from "@/assets/counter.png";
export default {
  data: function() {
    return {
      image: image
    };
  }
};
</script>