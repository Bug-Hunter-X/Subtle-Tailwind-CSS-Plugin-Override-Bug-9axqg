```javascript
// ... some Tailwind CSS classes
<div class="bg-gray-100 p-4">
  <h1 class="text-3xl font-bold">Uncommon Tailwind Bug</h1>
  <p class="text-gray-700">
    This div should have a gray background, but it doesn't!  The problem is subtle: I'm using a plugin that adds styles that unintentionally override Tailwind's.
  </p>
</div>
```