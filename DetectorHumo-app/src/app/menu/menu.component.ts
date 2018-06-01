import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';                 //api
import {TieredMenuModule} from 'primeng/tieredmenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Notificaciones',
                icon: 'fa-bell',
                /* items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project', icon: 'fa-lock'},
                            {label: 'Other', icon: 'fa-list'}
                        ]
                    },
                    {label: 'Open', icon: 'fa-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'fa-close'}
                ] */
            },
            {
                label: 'Lugares',
                icon: 'fa-university',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Consulta',
                icon: 'fa-question',
                /* items: [
                    {
                        label: 'Contents',
                        icon: 'fa-bars'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File',
                                icon: 'fa-file',
                            }
                    ]}
                ] */
            },
            {
                label: 'Configuracion',
                icon: 'fa-gear',
            /*     items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ] */
            }
        ];
    }

}



