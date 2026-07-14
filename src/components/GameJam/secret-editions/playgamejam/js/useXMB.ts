import { useEffect } from 'react';

export const useXMB = () => {
  useEffect(() => {
    const video = document.getElementById("vid") as HTMLVideoElement;
    const titles = document.getElementById("title");
    const warning = document.querySelectorAll(".warning")[0] as HTMLElement;
    const menu = document.getElementById("menu") as HTMLElement;
    const clockSection = document.querySelectorAll(".clock")[0] as HTMLElement;
    const dateTime = document.getElementById("date") as HTMLElement;
    const xmbMain = document.querySelectorAll(".xmb-main")[0] as HTMLElement;
    const section = document.querySelectorAll(".xmb-title");
    const submenuOne = document.querySelectorAll(".submenu.one");
    const submenuTwo = document.querySelectorAll(".submenu.two");
    const submenuthree = document.querySelectorAll(".submenu.three");
    const submenuFour = document.querySelectorAll(".submenu.four");
    const submenu = [submenuOne, submenuTwo, submenuthree, submenuFour];
    const startupSound = document.getElementById("startup") as HTMLAudioElement;
    const navSound = document.getElementById("nav") as HTMLAudioElement;
    const myMusic = document.getElementById("my-music") as HTMLAudioElement;
    
    if (!video || !titles || !warning || !menu || !clockSection || !dateTime || !xmbMain || !startupSound || !navSound) {
      return;
    }

    let sectionNumber = 0;
    let subsection = 0;
    let multiSection = false;
    let menuLoaded = false;
    
    // Some browsers block autoplay without interaction, wrapped in a try/catch just in case
    try {
      startupSound.play();
    } catch (e) {
      console.warn("Audio autoplay blocked", e);
    }
    
    let checkLoad = () => {
        return new Promise<void>((resolve) => {
            resolve();
        });
    };
    
    let titlesTimeOut = () => {
        return new Promise<void>(resolve => {
            setTimeout(resolve, 10000);
        });
    };
    
    let warningTimeOut = () => {
        return new Promise<void>(resolve => {
            setTimeout(resolve, 7000);
        });
    };
    
    let warningDisplay = async () => {
        await titlesTimeOut();
        titles?.remove();
        if(warning) warning.style.opacity = '1';
        setTimeout(() => {
            if(warning) {
                warning.style.opacity = '0';
                warning.remove();
            }
        }, 6000);
        await warningTimeOut();
    };
    
    let clockInterval: ReturnType<typeof setTimeout>;
    let sideClock = () => {
        let d  = new Date();
        let clock = `${d.getDate()}/${d.getMonth()+1} ${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
        if(dateTime) dateTime.innerText = clock;
        clockInterval = setTimeout(sideClock, 1000);
    };
    
    let loadTitles = async () => {
        await checkLoad();
        try {
            video.play();
        } catch (e) {}
        video.style.opacity = '1';
        titles.style.opacity = '1';
        await warningDisplay();
    };
    
    let loadMenu = async () => {
        await loadTitles();
        menu.style.opacity = '1';
        sideClock();
        clockSection.style.opacity = '1';
        menuLoaded = true;
    };
    
    let moveMenu = (hd: string, ultraHd: string | number, fullHd: string | number) => {
        let width = document.body.clientWidth;
        if (width < 1400) {
            xmbMain.style.marginRight = hd;
        }
        else if (width >= 2560 && width <= 3840) {
            xmbMain.style.marginRight = ultraHd.toString();
        }
        else {
            xmbMain.style.marginRight = fullHd.toString();
        }
    };
    
    let focusSection = (sn: number, right: boolean, left: boolean) => {
        if (myMusic) {
            myMusic.pause();
            myMusic.currentTime = 0;
        }
        if(section[sn]) section[sn].classList.add("active");
        if(right === true && section[sn-1]){
            section[sn-1].classList.remove("active");
        }
        else if(left === true && section[sn+1]){
            section[sn+1].classList.remove("active");
        }
        switchSection();

        // Sync subsection variable with the DOM state of the new section
        const activeSection = section[sn];
        if (activeSection) {
            const activeSub = activeSection.querySelector('.submenu.active');
            if (activeSub) {
                if (activeSub.classList.contains('one')) subsection = 0;
                else if (activeSub.classList.contains('two')) subsection = 1;
                else if (activeSub.classList.contains('three')) subsection = 2;
                else if (activeSub.classList.contains('four')) subsection = 3;
            } else {
                subsection = 0;
            }
        }

        // Play music if we arrived at Music -> Minha música
        if (sn === 3 && subsection === 0 && myMusic) {
            try { myMusic.play(); } catch(e){}
        }
    };
    
    let switchSection = () => {
        multiSection = false;
        switch (sectionNumber) {
            case 0:
                moveMenu('-40%', 0, 0);
                break;
            case 1:
                moveMenu('-10%', '18%', '18%');
                multiSection = true;
                break;
            case 2:
                moveMenu('22%', '32%', '39%');
                break;
            case 3:
                moveMenu('50%', '47%', '60%');
                break;
            case 4:
                moveMenu('76%', '62%', '77%');
                break;
            case 5:
                moveMenu('100%', '77%', '97%');
                break;
            case 6:
                moveMenu('124%', '92%', '117%');
                break;
        }
    };
    
    let focusSubMenu = (sn: number, sub: number, down: boolean, up: boolean) => {
        const activeSection = section[sn];
        if (!activeSection) return;

        if (sn === 3 && sub === 0 && myMusic) {
            try { myMusic.play(); } catch(e){}
        } else if (myMusic) {
            myMusic.pause();
            myMusic.currentTime = 0;
        }

        const submenus = activeSection.querySelectorAll('.submenu');

        if (down) {
            // Remove active from previous
            if (sub > 0 && submenus[sub - 1]) {
                submenus[sub - 1].classList.remove('active');
                if (sub === 1) submenus[0].classList.add('inactive');
                if (sub === 2) submenus[0].classList.add('gotop');
                if (sub === 3) submenus[0].classList.add('gotop2');
                if (sub === 4) submenus[0].classList.add('gotop3');
            }
            // Add active to current
            if (submenus[sub]) submenus[sub].classList.add('active');
            
        } else if (up) {
            // Remove active from next
            if (sub < submenus.length - 1 && submenus[sub + 1]) {
                submenus[sub + 1].classList.remove('active');
            }
            // Add active to current
            if (submenus[sub]) {
                submenus[sub].classList.add('active');
                if (sub === 0) {
                    submenus[0].classList.remove('inactive');
                }
                if (sub === 1) {
                    submenus[0].classList.remove('gotop');
                }
                if (sub === 2) {
                    submenus[0].classList.remove('gotop2');
                }
                if (sub === 3) {
                    submenus[0].classList.remove('gotop3');
                }
            }
        }
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
        if (!menuLoaded || document.querySelector('.psn-modal-open')) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', ' '].includes(e.key)) {
                // If a modal is open, we do NOT want to preventDefault for Enter/Space
                // so that the user can type or submit forms inside the modal.
                // We only preventDefault if the menu is not loaded.
                if (!menuLoaded) {
                    e.preventDefault();
                }
            }
            return;
        }

        if(e.key === 'ArrowDown'){
            try { navSound.play(); } catch(e){}
            e.preventDefault();
            subsection++;
            
            const activeSection = section[sectionNumber];
            let maxSub = activeSection ? activeSection.querySelectorAll('.submenu').length - 1 : 0;
            
            if(subsection < 0){
                subsection = 0;
            }
            else if (subsection > maxSub){
                subsection = maxSub;
            }
            focusSubMenu(sectionNumber, subsection, true, false);
        }
    
        else if(e.key === 'ArrowUp'){
            try { navSound.play(); } catch(e){}
            e.preventDefault();
            subsection--;
            
            const activeSection = section[sectionNumber];
            let maxSub = activeSection ? activeSection.querySelectorAll('.submenu').length - 1 : 0;
            
            if (subsection < 0) {
                subsection = 0;
            }
            else if (subsection > maxSub) {
                subsection = maxSub;
            }
            focusSubMenu(sectionNumber, subsection, false, true);
        }
    
        else if(e.key === 'ArrowRight'){
            try { navSound.play(); } catch(e){}
            e.preventDefault();
            sectionNumber++;
            if(sectionNumber<0){
                sectionNumber = 0;
            }
            else if(sectionNumber > 5){
                sectionNumber = 5;
            }
            focusSection(sectionNumber, true, false);
        }
    
        else if(e.key === 'ArrowLeft'){
            try { navSound.play(); } catch(e){}
            e.preventDefault();
            sectionNumber--;
            if (sectionNumber < 0) {
                sectionNumber = 0;
            }
            else if (sectionNumber > 5) {
                sectionNumber = 5;
            }
            focusSection(sectionNumber, false, true);
        }

        else if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            const activeSection = section[sectionNumber];
            if (activeSection) {
                const submenus = activeSection.querySelectorAll('.submenu');
                const targetSubmenu = submenus[subsection] as HTMLElement;
                if (targetSubmenu) {
                    targetSubmenu.click();
                }
            }
        }
    };

    document.body.addEventListener('keydown', handleKeyDown);
    
    loadMenu();
    
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
      clearTimeout(clockInterval);
    };
  }, []);
};
