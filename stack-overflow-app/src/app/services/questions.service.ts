import { Question } from './../types';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  url = environment.config.url;
  key = environment.config.key;

  constructor(
    private httpService: HttpClient
  ) { }

  getFeaturedQuestions$(): Observable<Question[]> {
    return this.httpService.get(`${this.url}/questions/featured?key=${this.key}&order=desc&sort=activity&site=stackoverflow`).pipe(
      map((questions: any) => {
        let featuredQuestions: Question[] = [];
        questions.items.map((currentQuestion: Question) => {
          const newFeaturedQuestion: Question = {
            answer_count: currentQuestion.answer_count,
            bounty_amount: currentQuestion.bounty_amount,
            bounty_closes_date: currentQuestion.bounty_closes_date,
            is_answered: currentQuestion.is_answered, 
            link: currentQuestion.link,
            owner: currentQuestion.owner,
            question_id: currentQuestion.question_id,
            score: currentQuestion.score,
            tags: currentQuestion.tags,
            title: currentQuestion.title,
            view_count: currentQuestion.view_count,
          };

          featuredQuestions = [...featuredQuestions, newFeaturedQuestion];
        });
        return featuredQuestions;
      })
    );
  }
}
