import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Expert } from '../expert.model';
import { Topic } from '../topic.model';
import { EService } from '../selectE.service';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {
  topic = {
    topicTitle:"Marketing",
    topicDescription:"how to market"
  }
  topic2 = {
    topicTitle:"Marketing",
    topicDescription:"how to sell things"
  }

  experts = [{
    username:"Sobky",
    topics : [this.topic]
  },
  {
    username:"Se7s",
    topics : [this.topic2]
  },
  {
    username:"raef",
    topics : [this.topic]
  },
  {
    username:"joe",
    topics : [this.topic2]
  }
  
]

  des = this.experts[1].topics[0].topicTitle;

  selected:Expert[]=[];
  count =0;
  f = false;
  constructor(public es:EService) { }

  ngOnInit() {
  }
  test(expert){
    if(this.count<3){
    this.selected.push(expert);
    this.count++;
    console.log(1);
    this.es.postExpert(expert);
  }else{
      this.f=true;
    }
  }

}
