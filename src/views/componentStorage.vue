<template>
      <div class="home">
    <div class="home1 ml-64 w-128 pt-16 flex justify-around">
      <div
        class="clickable item bg-transparent ml-2 mr-2 w-1/3 flex-col text-center justify-between h-64 font-semibold hover:text-white py-2 px-4 border border-4 hover:border-transparent rounded-xl hover:bg-main_primary hover:text-bg_primary">
        <div id="symbol" class="text-4xl">{{recent_stocks.one.symbol}}</div>
        <div id="name" class="text-2xl">{{recent_stocks.one.name}}</div>
        <div id="price" class="text-xl">{{recent_stocks.one.price}}</div>
      </div>
      <div
        class="clickable item bg-transparent ml-2 mr-2 justify-between text-center w-1/3 flex-col h-64 font-semibold hover:text-white py-2 px-4 border border-4 hover:border-transparent rounded-xl hover:bg-main_primary hover:text-bg_primary">
        <div id="symbol" class="text-4xl">{{recent_stocks.two.symbol}}</div>
        <div id="name" class="text-2xl">{{recent_stocks.two.name}}</div>
        <div id="price" class="text-xl">{{recent_stocks.two.price}}</div>
      </div>
      <div
        class="clickable item bg-transparent ml-2 mr-2 text-center w-1/3 flex-col h-64 font-semibold hover:text-white py-2 px-4 border border-4 hover:border-transparent rounded-xl hover:bg-main_primary hover:text-bg_primary">
        <div id="symbol" class="text-4xl">{{recent_stocks.three.symbol}}</div>
        <div id="name" class="text-2xl">{{recent_stocks.three.name}}</div>
        <div id="price" class="text-xl">{{recent_stocks.three.price}}</div>
      </div>
    </div>
    <div class="home2 ml-64 pt-4 flex justify-around items-center">
      <div
        class="clickable bg-transparent ml-2 mr-2 justify-between justify-around w-full flex items-center h-32 font-semibold hover:text-white py-2 px-4 border border-4 hover:border-transparent rounded-xl hover:bg-main_primary hover:text-bg_primary">
        <div id="portfolio" class="text-4xl">View Portfolio</div>
      </div>
    </div>
  </div>
</template>
