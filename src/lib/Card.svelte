<script>
  export let title, link;
</script>

<a href={link} target="_blank" 
   class="z-50 flex flex-col bg-color-5 bg-opacity-[15%] hover:bg-opacity-25 group p-6 shadow-md transition duration-500 ease-in-out hover:brightness-90 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
  <h2 class="text-color-1 font-mono font-bold sm:text-base md:text-lg lg:text-xl mb-4 group-hover:text-accent">{title}</h2>
  <p class="text-color-1 text-sm sm:text-base group-hover:text-blueGray-200 flex-1">
    <slot></slot>
  </p>
</a>