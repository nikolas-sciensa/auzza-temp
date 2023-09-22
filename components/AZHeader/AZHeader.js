export class AZHeader extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .header {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: ${this.hasAttribute('open') ? 'calc(100vw - 190px)' : 'calc(100vw - 54.91px)' };
                height: 70px;
                border-bottom: 1px solid rgba(68, 73, 85, 1);
                background: rgba(42, 15, 84, 1);
                flex: 1;
            }

            .menuButton {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                background: rgba(56, 27, 117, 1);
                margin: 0 23px;
            }

            .menuIcon {
                width: 24px;
                height: 24px;
            }

            .profileContainer {
                display: flex;
                align-items: center;
                margin-left: auto;
            }

            .profileName {
                margin-left: 32px;
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
                text-align: left;
                color: rgba(215, 215, 227, 1)
            }
        `;
        const header = document.createElement('div');
        header.classList.add('header');

        const menuButton = document.createElement('div');
        menuButton.classList.add('menuButton');

        const menuIcon = document.createElement('img');
        menuIcon.classList.add('menuIcon');
        menuIcon.src = './assets/images/headerImage.png';

        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profileContainer');

        const notificationButton = document.createElement('div');
        notificationButton.classList.add('menuButton');

        const notificationIcon = document.createElement('img');
        notificationIcon.classList.add('menuIcon');
        notificationIcon.src = './assets/images/notification.png';

        const profileName = document.createElement('span');
        profileName.classList.add('profileName');
        profileName.textContent = 'John Doe';

        const profileImage = document.createElement('img');
        profileImage.classList.add('menuButton');
        profileImage.src = './assets/images/profileImage.png';
        
        profileContainer.appendChild(document.createElement('az-header-divider'));
        notificationButton.appendChild(notificationIcon);
        profileContainer.appendChild(notificationButton);
        profileContainer.appendChild(document.createElement('az-header-divider'));
        profileContainer.appendChild(profileName);
        profileContainer.appendChild(profileImage);

        menuButton.appendChild(menuIcon);
        header.appendChild(menuButton);
        header.appendChild(document.createElement('az-header-divider'));
        header.appendChild(profileContainer);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(header);
    }
}