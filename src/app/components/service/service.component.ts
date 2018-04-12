import { Component, OnInit,OnDestroy,Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit,OnDestroy {

  private sub:any;
  public serviceData:any;
  public isServiceDetail=false;
  public property=[{ field:'seq',sort:true,type:'number'},
  { field:'CompanyName',sort:true,type:'string'},
  { field:'ServiceName',sort:true,type:'string'},
  { field:'Address',sort:true,type:'string'}];
  @Input('inputData')
  setValue(value){
    if(value)
    {
      this.isServiceDetail=true;
    }
  }
  constructor(private service:ProductService,private activatedRoute: ActivatedRoute) { 
    //console.log(activatedRoute.snapshot.url); // array of states
    if(activatedRoute.snapshot.url[0].path!="services")
    {
      this.isServiceDetail=true;
    }
  }

  ngOnInit() {
    this.getJsonData();
  }
 //this method is used to fetch the data for the table
  private getJsonData()
  {
    this.sub=this.service.getData().subscribe(data=>{
      this.serviceData=data;
      var i=1;
      for (const item of this.serviceData) {
        item['seq']=i;
        item['chk']=false;
        i++;
      }
    },error=>{ console.log(error)})
  }
  public currenSort:any;
  public sortField(data)
  {
    console.log("data="+data)
    var find= this.property.find(f=>f.field==data);
    if(find)
    {
      find.sort=!find.sort;
      this.currenSort=find;
      console.log(find);
    }
    
  }
  public SelectedItems=[];
  public allChked=false;
  public isClose=true;
  public Select(item:any)
  {
    if(item=="all")
    {
      this.SelectedItems=[];
      this.serviceData.forEach(element => {
        element.chk=this.allChked;
      });
      if(this.allChked==true)
      { 
        Object.assign(this.SelectedItems,this.serviceData);
      }
    }
    else
    {
        this.SelectedItems=this.SelectedItems.filter(f=>f.chk==true);
    }
  }
  ngOnDestroy()
  {
    //clear object to avoid memory leaks 
    this.sub.unsubscribe();
  }
}
