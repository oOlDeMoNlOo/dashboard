import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class DashboardService implements OnInit {

    total = 0;
    today = 0;
    now = 0;

    weeklyStatistics: any;
    dailyStatistics: any;

    constructor() {
        this.total = 15;
        this.today = 10;
        this.now = 0;
        this.initDailyStatistics();
        this.initWeeklyStatistics();
    }

    ngOnInit() {

    }

    initDailyStatistics(){
        this.dailyStatistics = {
            labels: ['1 пара', '2 пара', '3 пара', '4 пара', '5 пара'],
            datasets: [
                {
                    label: 'Всего',
                    data: [13, 13, 13, 13, 13],
                    borderColor: '#1e88e5',
                    backgroundColor: '#1e88e5'
                },
                {
                    label: 'Присутствуют',
                    data: [5, 8, 5, 4, 0],
                    borderColor: '#ffb22b',
                    backgroundColor: '#ffb22b'
                },
                {
                    label: 'Отсутствуют',
                    data: [8, 5, 8, 9, 13],
                    borderColor: '#7460ee',
                    backgroundColor: '#7460ee'
                }
            ]
        }
    }
    initWeeklyStatistics(){
        this.weeklyStatistics = {
            labels: ['20.03.2018', '21.03.2018', '22.03.2018', '23.03.2018', '24.03.2018', '25.03.2018', '26.03.2018'],
            datasets: [
                {
                    label: 'Всего студентов',
                    data: [10, 10, 11, 12, 12, 12, 13],
                    fill: false,
                    borderColor: '#1e88e5'
                },
                {
                    label: 'Стедентов сегодня',
                    data: [8, 5, 4, 10, 0, 0, 2],
                    fill: false,
                    borderColor: '#ffb22b'
                },
                {
                    label: 'Студентво отсутствует',
                    data: [2, 5, 7, 2, 12, 12, 11],
                    fill: false,
                    borderColor: '#7460ee'
                },
                {
                    data: [0],
                    label: 'Минимальное количество'
                }
            ]
        }
    }
}
