const toggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    // Show light Icon
    lightIcon.classList.remove('hidden');
  } else {
    darkIcon.classList.remove('hidden');
}

// Listen for click event on Toggle button
toggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
    // Toggle Icon
    darkIcon.classList.toggle('hidden')
    lightIcon.classList.toggle('hidden')

    // Check the color theme in local storage
    if (localStorage.getItem('color-theme')) {
        // If light flip to dark & store in Local storage
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        // If not in localStorage
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
    }
};
