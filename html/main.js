const sidebarChildren = [
    {
        title: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        links: [
            { title: 'Home', icon: 'fas fa-home', options: 'home' },
            { title: 'About', icon: 'fas fa-info', options: 'about' }
        ]
    },
    {
        title: 'Settings',
        icon: 'fas fa-cog',
        links: [
            { title: 'Profile', icon: 'fas fa-user', options: 'profile' },
            { title: 'Account', icon: 'fas fa-user-cog', options: 'account' }
        ]
    }
]


function addSidebarChildren(children){
    const sidebar = document.getElementById('sidebar')

    const linkTemplate = "<button onclick='openActions(this, {{OPTIONS}})'><i class='{{ICON}}'></i> {{TITLE}}</button>"
    const childTemplate = [
        "<div class='sidebar-dropdown'>",
            "<button class='dropdown-btn' onclick='showDropdown(this)'>",
                "<i class='{{ICON}}'></i>",
                "{{TITLE}}",
            "</button>",
            "<div class='dropdown-content'>",
                "{{LINKS}}",
            "</div>",
        "</div>"
    ].join('\n')

    children.forEach(child =>{
        let childHtml = childTemplate
            .replaceAll('{{ICON}}', child.icon)
            .replaceAll('{{TITLE}}', child.title)
            .replaceAll('{{LINKS}}', child.links.forEach(link => {
                return linkTemplate
                    .replaceAll('{{ICON}}', link.icon)
                    .replaceAll('{{TITLE}}', link.title)
                    .replaceAll('{{OPTIONS}}', link.options)
            }))

        sidebar.innerHTML += childHtml
    })
}

function showDropdown(self) {
    console.log(self.parentElement.querySelector('.dropdown-content'));
    self.parentElement.querySelector('.dropdown-content').classList.toggle('active');
}