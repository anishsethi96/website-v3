import { Time } from '@angular/common';

export class services {
  public service_tier: number;
  public org_name: string;
  public contact_name: string;
  public contact_email: string;
  public contact_phone: string;
  public secondary_contact_name: string;
  public secondary_contact_email: string;
  public secondary_contact_phone: string;
  public event_name: string;
  public event_location: string;
  public event_date: Date;
  public event_arr_time: Time;
  public event_type: string;
  public expected_attendance: number;
  public expected_duration: number;
  public more_info: string;

  constructor() {
    this.service_tier = 0;
    this.org_name = "";
    this.contact_name = "";
    this.contact_email= "";
    this.contact_phone = "";
    this.secondary_contact_name = "";
    this.secondary_contact_email = "";
    this.secondary_contact_phone = "";
    this.event_name = "";
    this.event_location = "";
    this.event_date = null;
    this.event_arr_time = null;
    this.event_type = "";
    this.expected_attendance = 0;
    this.expected_duration = 0;
    this.more_info = "";
  }
}