import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@bluebits/products';
import { CategoriesService } from '@bluebits/products';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private router: Router

    ) { }

  ngOnInit(): void {
    this._getCategories();
  }

  deleteCategory(categoryId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(categoryId).subscribe(
          {
            next: () => {
              this._getCategories();
              this.messageService.add({severity: 'success', summary: 'Success', detail:'Category is deleted'});
            },
            error: () => this.messageService.add({ severity:'error', summary: 'Error', detail:'Category could not be deleted'})
          },

        );
      }})}

  private _getCategories() {
    this.categoriesService.getCategories().subscribe( cats => {
      console.log(cats);
      
      this.categories = cats;
    })
  }

  updateCategory(categoryId: string) {
    this.router.navigateByUrl(`categories/form/${categoryId}`)
  }

}
