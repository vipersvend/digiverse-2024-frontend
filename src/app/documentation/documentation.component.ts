import { Component } from '@angular/core';
import { HorizontalLineComponent } from '../horizontal-line/horizontal-line.component'
import { FooterComponent } from '../footer/footer.component'
import { CarouselComponent } from '../carousel/carousel.component'
import { HeaderComponent } from '../header/header.component'
import { TimelineComponent } from '../timeline/timeline.component';
import {  StatsComponent } from '../stats/stats.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ImginfoComponent } from '../imginfo/imginfo.component';
import { CardsComponent } from '../cards/cards.component';
import { SvginfoComponent } from '../svginfo/svginfo.component';
import { PanaromaComponent } from '../panaroma/panaroma.component';
import { TabularinfoComponent } from '../tabularinfo/tabularinfo.component';
import { QrdashboardComponent } from '../qrdashboard/qrdashboard.component'
import { FormComponent } from '../form/form.component'

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [HorizontalLineComponent, FooterComponent,
    CarouselComponent, HeaderComponent,
    TimelineComponent, StatsComponent,
    RegistrationComponent,
    ImginfoComponent,
    CardsComponent,
    SvginfoComponent,
    PanaromaComponent,
    TabularinfoComponent,
    QrdashboardComponent,
    FormComponent
  ],
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {

}
