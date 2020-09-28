<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {DnsCheckService} from '../../services/dns-check.service';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import { TranslateService } from '@ngx-translate/core';
=======
import { Component, OnInit } from '@angular/core';
import { DnsCheckService } from '../../services/dns-check.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
>>>>>>> 8affa5bbcc1f2dffd9ecdbe77f247d20dfa99e53

@Component({
    selector: 'app-domain',
    templateUrl: './domain.component.html',
    styleUrls: ['./domain.component.css'],
})
export class DomainComponent implements OnInit {
    private intervalTime = 5 * 1000;
    public is_advanced_options_enabled = false;
    public domain_check_progression = 0;
    public showResult = false;
    public showProgressBar = false;
    public parentData: any;
    public resultID = '';
    public profiles = [];
    public toggleFinished = false;

<<<<<<< HEAD
  constructor(private alertService: AlertService, 
    private dnsCheckService: DnsCheckService,
    private translateService: TranslateService) {}
=======
    constructor(
        private alertService: AlertService,
        private dnsCheckService: DnsCheckService
    ) {}
>>>>>>> 8affa5bbcc1f2dffd9ecdbe77f247d20dfa99e53

    ngOnInit() {
        this.dnsCheckService
            .profileNames()
            .then((res: string[]) => (this.profiles = res));
    }

<<<<<<< HEAD
  public fetchFromParent(domain) {
    this.dnsCheckService.fetchFromParent(domain).then(result => {
      if (result['ds_list'].length === 0 && result['ns_list'].length === 0) {
        this.translateService.get('There is no delegation for the zone').subscribe((res: string) => {
          this.alertService.warn(res);
        });
      } else {
        this.parentData = result;
        this.translateService.get('Parent data fetched with success').subscribe((res: string) => {
          this.alertService.success(res);
        });
      }
    }, error => {
      console.log(error);
      this.translateService.get('Error during parent data fetching').subscribe((res: string) => {
        this.alertService.error(res);
      });
  });
  }
=======
    public fetchFromParent(domain) {
        this.dnsCheckService.fetchFromParent(domain).then(
            (result) => {
                if (
                    result['ds_list'].length === 0 &&
                    result['ns_list'].length === 0
                ) {
                    this.alertService.warn(
                        'There is no delegation for the zone'
                    );
                } else {
                    this.parentData = result;
                    this.alertService.success(
                        'Parent data fetched with success'
                    );
                }
            },
            (error) => {
                console.log(error);
                this.alertService.error('Error during parent data fetching');
            }
        );
    }
>>>>>>> 8affa5bbcc1f2dffd9ecdbe77f247d20dfa99e53

    public openOptions(value) {
        this.is_advanced_options_enabled = value;
    }

    public domainCheck(data: object) {
        let domainCheckId: string;

        const self = this;

        this.dnsCheckService.startDomainTest(data).then(
            (id) => {
                domainCheckId = id as string;
                this.showProgressBar = true;
                const handle = setInterval(() => {
                    self.dnsCheckService
                        .testProgress(domainCheckId)
                        .then((res) => {
                            self.domain_check_progression = parseInt(
                                res as string,
                                10
                            ) as number;

<<<<<<< HEAD
          self.domain_check_progression = parseInt(res as string, 10) as number;

          if (self.domain_check_progression === 100) {
            clearInterval(handle);
            this.translateService.get(`Domain checked completed`).subscribe((res: string) => {
              this.alertService.success(res);
            });
            self.resultID = domainCheckId;
            self.is_advanced_options_enabled = false;
            self.showResult = true;
            self.showProgressBar = false;
            self.domain_check_progression = 5;
            self.toggleFinished = !self.toggleFinished;
          }
        });
      }, this.intervalTime);
    }, error => {this.translateService.get(`Internal server error`).subscribe((res: string) => {
        this.alertService.error(res);
      });
    });
  }
=======
                            if (self.domain_check_progression === 100) {
                                clearInterval(handle);
                                this.alertService.success(
                                    `Domain checked completed`
                                );
                                self.resultID = domainCheckId;
                                self.is_advanced_options_enabled = false;
                                self.showResult = true;
                                self.showProgressBar = false;
                                self.domain_check_progression = 5;
                                self.toggleFinished = !self.toggleFinished;
                            }
                        });
                }, this.intervalTime);
            },
            (error) => {
                this.alertService.error(`Internal server error`);
            }
        );
    }
>>>>>>> 8affa5bbcc1f2dffd9ecdbe77f247d20dfa99e53
}
