import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OpenService } from '@core/services/open.service';
import { AUTH_CONFIG, DefaultConfig } from '@auth/auth.options';
import { AuthService } from '@auth/auth.service';
import { get } from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', this.getValidators('username')],
    password: ['', this.getValidators('password')],
  });

  constructor(
    private openService: OpenService,
    private formBuilder: FormBuilder,
    @Inject(AUTH_CONFIG) private config: DefaultConfig,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  getValidators(field: string) {
    const fns = [];

    const required = get(this.config, `form.login.${field}.required`);
    const minLength = get(this.config, `form.login.${field}.minLength`);

    if (required) {
      fns.push(Validators.required);
    }

    if (minLength) {
      fns.push(Validators.minLength(minLength));

    }

    return fns;
  }

  get count() {
    return this.openService.count;
  }

  add() {
    this.openService.add();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .subscribe(response => {
          if (response.isSuccess) {
            setTimeout(() => {
              location.href = this.config.form.login.redirect.url;
            }, this.config.form.login.redirect.delay);
          }
        });
    }
  }

}
