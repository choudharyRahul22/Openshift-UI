export class WorkAreaSelectionModel {

  public queue = [];
  public business = [];
  public cell = [];
  public source = [];


  constructor(queue: Array<{}>, business: Array<{}>, cell: Array<{}>, source: Array<{}>) {
    this.queue = queue;
    this.business = business;
    this.cell = cell;
    this.source = source;
  }
}
