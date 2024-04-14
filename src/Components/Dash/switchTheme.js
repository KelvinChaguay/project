import React, { useEffect } from 'react';

const SwitchTheme = () => {
  useEffect(() => {
    const sidebarToggle = () => {
      document.body.classList.toggle('sidebar-open')
    } 
 
    const sidebarTrigger = document.getElementById('main-header__sidebar-toggle')

    if (sidebarTrigger) {
      sidebarTrigger.addEventListener('click', sidebarToggle)
    }

    const sidebarCollapse = () => {
      document.body.classList.toggle('sidebar-collapsed')
    }

    const sidebarCollapseTrigger = document.getElementById('sidebar__collapse')

    if (sidebarCollapseTrigger) {
      sidebarCollapseTrigger.addEventListener('click', sidebarCollapse)
    }

    const switchTheme = () => {
      const rootElem = document.documentElement
      let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme

      newTheme = (dataTheme === 'light') ? 'dark' : 'light'

      rootElem.setAttribute('data-theme', newTheme)
      localStorage.setItem("theme", newTheme)
    }

    const themeSwitcher = document.querySelector('#sidebar__theme-switcher')

    if (themeSwitcher) {
      themeSwitcher.addEventListener('click', switchTheme)
    }

    return () => {
      if (sidebarTrigger) {
        sidebarTrigger.removeEventListener('click', sidebarToggle)
      }

      if (sidebarCollapseTrigger) {
        sidebarCollapseTrigger.removeEventListener('click', sidebarCollapse)
      }

      if (themeSwitcher) {
        themeSwitcher.removeEventListener('click', switchTheme)
      }
    }
  }, []);

  return null;
}

export default SwitchTheme;