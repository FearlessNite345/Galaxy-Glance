<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
	import '../app.postcss';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
	  <!--<img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SpaceTracker</span>
	</NavBrand>
	<div class="flex md:order-2">
		<DarkMode />
	  <NavHamburger on:click={toggle} />
	</div>
	<NavUl activeClass='text-blue-700' {activeUrl} {hidden} class="order-1">
		<NavLi href="/">Home</NavLi>
		<NavLi href="/upcoming">Upcoming Launches</NavLi>
		<NavLi href="/past">Past Launches</NavLi>
		<NavLi href="/companies">Companies</NavLi>
	</NavUl>
  </Navbar>

<slot />
