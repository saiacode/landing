import { component$ } from '@builder.io/qwik';

export default component$(({
  name = "Miembro de SAIA",
}: {
  name?: string,
  headshots_url?: string,
  bio?: string
}) => {
  return (
    <div class={['container']}>

      <div class=" py-16 px-4 md:px-0">
        <div class="container mx-auto">
          <h1 class="text-white text-left text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
            {name}
          </h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">Bio</h2>
            <p class="text-left text-lg leading-8 mb-10">b</p>
            <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">Fotos</h2>
            <div class="mt-10 lg:flex lg:gap-x-12 lg:flex-1 lg:items-center lg:justify-start">
              <a href="https://google.com" class="rounded-full bg-transparent px-5 py-3 text-md font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black"></a>
            </div>
          </div>

        </div>



      </div>

    </div>




  );
});
