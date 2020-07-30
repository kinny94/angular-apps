import { Observable } from 'rxjs';
import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/types';

@Component({
  selector: 'app-featured-questions',
  templateUrl: './featured-questions.component.html',
  styleUrls: ['./featured-questions.component.scss']
})
export class FeaturedQuestionsComponent implements OnInit {

  featuredQuestions$: Observable<Question[]>;

  constructor(
    private questionService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.featuredQuestions$ = this.questionService.getFeaturedQuestions$();
  }

}
