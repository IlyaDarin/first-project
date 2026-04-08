// База неправильных глаголов с спряжениями
const irregularVerbs = [
    {
        infinitive: 'être',
        translation: 'быть',
        conjugations: {
            present: {
                je: 'suis', tu: 'es', il: 'est', nous: 'sommes', vous: 'êtes', ils: 'sont'
            },
            imparfait: {
                je: 'étais', tu: 'étais', il: 'était', nous: 'étions', vous: 'étiez', ils: 'étaient'
            },
            futur: {
                je: 'serai', tu: 'seras', il: 'sera', nous: 'serons', vous: 'serez', ils: 'seront'
            },
            passe_compose: {
                je: 'ai été', tu: 'as été', il: 'a été', nous: 'avons été', vous: 'avez été', ils: 'ont été'
            }
        }
    },
    {
        infinitive: 'avoir',
        translation: 'иметь',
        conjugations: {
            present: {
                je: 'ai', tu: 'as', il: 'a', nous: 'avons', vous: 'avez', ils: 'ont'
            },
            imparfait: {
                je: 'avais', tu: 'avais', il: 'avait', nous: 'avions', vous: 'aviez', ils: 'avaient'
            },
            futur: {
                je: 'aurai', tu: 'auras', il: 'aura', nous: 'aurons', vous: 'aurez', ils: 'auront'
            },
            passe_compose: {
                je: 'ai eu', tu: 'as eu', il: 'a eu', nous: 'avons eu', vous: 'avez eu', ils: 'ont eu'
            }
        }
    },
    {
        infinitive: 'aller',
        translation: 'идти',
        conjugations: {
            present: {
                je: 'vais', tu: 'vas', il: 'va', nous: 'allons', vous: 'allez', ils: 'vont'
            },
            imparfait: {
                je: 'allais', tu: 'allais', il: 'allait', nous: 'allions', vous: 'alliez', ils: 'allaient'
            },
            futur: {
                je: 'irai', tu: 'iras', il: 'ira', nous: 'irons', vous: 'irez', ils: 'iront'
            },
            passe_compose: {
                je: 'suis allé', tu: 'es allé', il: 'est allé', nous: 'sommes allés', vous: 'êtes allés', ils: 'sont allés'
            }
        }
    },
    {
        infinitive: 'faire',
        translation: 'делать',
        conjugations: {
            present: {
                je: 'fais', tu: 'fais', il: 'fait', nous: 'faisons', vous: 'faites', ils: 'font'
            },
            imparfait: {
                je: 'faisais', tu: 'faisais', il: 'faisait', nous: 'faisions', vous: 'faisiez', ils: 'faisaient'
            },
            futur: {
                je: 'ferai', tu: 'feras', il: 'fera', nous: 'ferons', vous: 'ferez', ils: 'feront'
            },
            passe_compose: {
                je: 'ai fait', tu: 'as fait', il: 'a fait', nous: 'avons fait', vous: 'avez fait', ils: 'ont fait'
            }
        }
    },
    {
        infinitive: 'pouvoir',
        translation: 'мочь',
        conjugations: {
            present: {
                je: 'peux', tu: 'peux', il: 'peut', nous: 'pouvons', vous: 'pouvez', ils: 'peuvent'
            },
            imparfait: {
                je: 'pouvais', tu: 'pouvais', il: 'pouvait', nous: 'pouvions', vous: 'pouviez', ils: 'pouvaient'
            },
            futur: {
                je: 'pourrai', tu: 'pourras', il: 'pourra', nous: 'pourrons', vous: 'pourrez', ils: 'pourront'
            },
            passe_compose: {
                je: 'ai pu', tu: 'as pu', il: 'a pu', nous: 'avons pu', vous: 'avez pu', ils: 'ont pu'
            }
        }
    },
    {
        infinitive: 'vouloir',
        translation: 'хотеть',
        conjugations: {
            present: {
                je: 'veux', tu: 'veux', il: 'veut', nous: 'voulons', vous: 'voulez', ils: 'veulent'
            },
            imparfait: {
                je: 'voulais', tu: 'voulais', il: 'voulait', nous: 'voulions', vous: 'vouliez', ils: 'voulaient'
            },
            futur: {
                je: 'voudrai', tu: 'voudras', il: 'voudra', nous: 'voudrons', vous: 'voudrez', ils: 'voudront'
            },
            passe_compose: {
                je: 'ai voulu', tu: 'as voulu', il: 'a voulu', nous: 'avons voulu', vous: 'avez voulu', ils: 'ont voulu'
            }
        }
    },
    {
        infinitive: 'devoir',
        translation: 'долженствовать',
        conjugations: {
            present: {
                je: 'dois', tu: 'dois', il: 'doit', nous: 'devons', vous: 'devez', ils: 'doivent'
            },
            imparfait: {
                je: 'devais', tu: 'devais', il: 'devait', nous: 'devions', vous: 'deviez', ils: 'devaient'
            },
            futur: {
                je: 'devrai', tu: 'devras', il: 'devra', nous: 'devrons', vous: 'devrez', ils: 'devront'
            },
            passe_compose: {
                je: 'ai dû', tu: 'as dû', il: 'a dû', nous: 'avons dû', vous: 'avez dû', ils: 'ont dû'
            }
        }
    },
    {
        infinitive: 'prendre',
        translation: 'брать',
        conjugations: {
            present: {
                je: 'prends', tu: 'prends', il: 'prend', nous: 'prenons', vous: 'prenez', ils: 'prennent'
            },
            imparfait: {
                je: 'prenais', tu: 'prenais', il: 'prenait', nous: 'prenions', vous: 'preniez', ils: 'prenaient'
            },
            futur: {
                je: 'prendrai', tu: 'prendras', il: 'prendra', nous: 'prendrons', vous: 'prendrez', ils: 'prendront'
            },
            passe_compose: {
                je: 'ai pris', tu: 'as pris', il: 'a pris', nous: 'avons pris', vous: 'avez pris', ils: 'ont pris'
            }
        }
    },
    {
        infinitive: 'venir',
        translation: 'приходить',
        conjugations: {
            present: {
                je: 'viens', tu: 'viens', il: 'vient', nous: 'venons', vous: 'venez', ils: 'viennent'
            },
            imparfait: {
                je: 'venais', tu: 'venais', il: 'venait', nous: 'venions', vous: 'veniez', ils: 'venaient'
            },
            futur: {
                je: 'viendrai', tu: 'viendras', il: 'viendra', nous: 'viendrons', vous: 'viendrez', ils: 'viendront'
            },
            passe_compose: {
                je: 'suis venu', tu: 'es venu', il: 'est venu', nous: 'sommes venus', vous: 'êtes venus', ils: 'sont venus'
            }
        }
    },
    {
        infinitive: 'voir',
        translation: 'видеть',
        conjugations: {
            present: {
                je: 'vois', tu: 'vois', il: 'voit', nous: 'voyons', vous: 'voyez', ils: 'voient'
            },
            imparfait: {
                je: 'voyais', tu: 'voyais', il: 'voyait', nous: 'voyions', vous: 'voyiez', ils: 'voyaient'
            },
            futur: {
                je: 'verrai', tu: 'verras', il: 'verra', nous: 'verrons', vous: 'verrez', ils: 'verront'
            },
            passe_compose: {
                je: 'ai vu', tu: 'as vu', il: 'a vu', nous: 'avons vu', vous: 'avez vu', ils: 'ont vu'
            }
        }
    },
    {
        infinitive: 'savoir',
        translation: 'знать',
        conjugations: {
            present: {
                je: 'sais', tu: 'sais', il: 'sait', nous: 'savons', vous: 'savez', ils: 'savent'
            },
            imparfait: {
                je: 'savais', tu: 'savais', il: 'savait', nous: 'savions', vous: 'saviez', ils: 'savaient'
            },
            futur: {
                je: 'saurai', tu: 'sauras', il: 'saura', nous: 'saurons', vous: 'saurez', ils: 'sauront'
            },
            passe_compose: {
                je: 'ai su', tu: 'as su', il: 'a su', nous: 'avons su', vous: 'avez su', ils: 'ont su'
            }
        }
    },
    {
        infinitive: 'dire',
        translation: 'говорить',
        conjugations: {
            present: {
                je: 'dis', tu: 'dis', il: 'dit', nous: 'disons', vous: 'dites', ils: 'disent'
            },
            imparfait: {
                je: 'disais', tu: 'disais', il: 'disait', nous: 'disions', vous: 'disiez', ils: 'disaient'
            },
            futur: {
                je: 'dirai', tu: 'diras', il: 'dira', nous: 'dirons', vous: 'direz', ils: 'diront'
            },
            passe_compose: {
                je: 'ai dit', tu: 'as dit', il: 'a dit', nous: 'avons dit', vous: 'avez dit', ils: 'ont dit'
            }
        }
    },
    {
        infinitive: 'mettre',
        translation: 'ставить',
        conjugations: {
            present: {
                je: 'mets', tu: 'mets', il: 'met', nous: 'mettons', vous: 'mettez', ils: 'mettent'
            },
            imparfait: {
                je: 'mettais', tu: 'mettais', il: 'mettait', nous: 'mettions', vous: 'mettiez', ils: 'mettaient'
            },
            futur: {
                je: 'mettrai', tu: 'mettras', il: 'mettra', nous: 'mettrons', vous: 'mettrez', ils: 'mettront'
            },
            passe_compose: {
                je: 'ai mis', tu: 'as mis', il: 'a mis', nous: 'avons mis', vous: 'avez mis', ils: 'ont mis'
            }
        }
    },
    {
        infinitive: 'partir',
        translation: 'уезжать',
        conjugations: {
            present: {
                je: 'pars', tu: 'pars', il: 'part', nous: 'partons', vous: 'partez', ils: 'partent'
            },
            imparfait: {
                je: 'partais', tu: 'partais', il: 'partait', nous: 'partions', vous: 'partiez', ils: 'partaient'
            },
            futur: {
                je: 'partirai', tu: 'partiras', il: 'partira', nous: 'partirons', vous: 'partirez', ils: 'partiront'
            },
            passe_compose: {
                je: 'suis parti', tu: 'es parti', il: 'est parti', nous: 'sommes partis', vous: 'êtes partis', ils: 'sont partis'
            }
        }
    },
    {
        infinitive: 'sortir',
        translation: 'выходить',
        conjugations: {
            present: {
                je: 'sors', tu: 'sors', il: 'sort', nous: 'sortons', vous: 'sortez', ils: 'sortent'
            },
            imparfait: {
                je: 'sortais', tu: 'sortais', il: 'sortait', nous: 'sortions', vous: 'sortiez', ils: 'sortaient'
            },
            futur: {
                je: 'sortirai', tu: 'sortiras', il: 'sortira', nous: 'sortirons', vous: 'sortirez', ils: 'sortiront'
            },
            passe_compose: {
                je: 'suis sorti', tu: 'es sorti', il: 'est sorti', nous: 'sommes sortis', vous: 'êtes sortis', ils: 'sont sortis'
            }
        }
    },
    {
        infinitive: 'dormir',
        translation: 'спать',
        conjugations: {
            present: {
                je: 'dors', tu: 'dors', il: 'dort', nous: 'dormons', vous: 'dormez', ils: 'dorment'
            },
            imparfait: {
                je: 'dormais', tu: 'dormais', il: 'dormait', nous: 'dormions', vous: 'dormiez', ils: 'dormaient'
            },
            futur: {
                je: 'dormirai', tu: 'dormiras', il: 'dormira', nous: 'dormirons', vous: 'dormirez', ils: 'dormiront'
            },
            passe_compose: {
                je: 'ai dormi', tu: 'as dormi', il: 'a dormi', nous: 'avons dormi', vous: 'avez dormi', ils: 'ont dormi'
            }
        }
    },
    {
        infinitive: 'boire',
        translation: 'пить',
        conjugations: {
            present: {
                je: 'bois', tu: 'bois', il: 'boit', nous: 'buvons', vous: 'buvez', ils: 'boivent'
            },
            imparfait: {
                je: 'buvais', tu: 'buvais', il: 'buvait', nous: 'buvions', vous: 'buviez', ils: 'buvaient'
            },
            futur: {
                je: 'boirai', tu: 'boiras', il: 'boira', nous: 'boirons', vous: 'boirez', ils: 'boiront'
            },
            passe_compose: {
                je: 'ai bu', tu: 'as bu', il: 'a bu', nous: 'avons bu', vous: 'avez bu', ils: 'ont bu'
            }
        }
    },
    {
        infinitive: 'lire',
        translation: 'читать',
        conjugations: {
            present: {
                je: 'lis', tu: 'lis', il: 'lit', nous: 'lisons', vous: 'lisez', ils: 'lisent'
            },
            imparfait: {
                je: 'lisais', tu: 'lisais', il: 'lisait', nous: 'lisions', vous: 'lisiez', ils: 'lisaient'
            },
            futur: {
                je: 'lirai', tu: 'liras', il: 'lira', nous: 'lirons', vous: 'lirez', ils: 'liront'
            },
            passe_compose: {
                je: 'ai lu', tu: 'as lu', il: 'a lu', nous: 'avons lu', vous: 'avez lu', ils: 'ont lu'
            }
        }
    }
];

// Состояние приложения
let appState = {
    currentVerbIndex: 0,
    currentTense: 'present',
    score: 0,
    streak: 0,
    totalExercises: 0,
    correctAnswers: 0,
    verbStats: {},
    learnedVerbs: new Set()
};

// Элементы DOM
const elements = {
    tabs: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    currentVerb: document.getElementById('currentVerb'),
    verbTranslation: document.getElementById('verbTranslation'),
    tenseSelect: document.getElementById('tenseSelect'),
    conjugationForm: document.getElementById('conjugationForm'),
    feedback: document.getElementById('feedback'),
    checkBtn: document.getElementById('checkBtn'),
    nextBtn: document.getElementById('nextBtn'),
    score: document.getElementById('score'),
    streak: document.getElementById('streak'),
    verbList: document.getElementById('verbList'),
    searchVerb: document.getElementById('searchVerb'),
    verbDetail: document.getElementById('verbDetail'),
    detailVerb: document.getElementById('detailVerb'),
    detailTranslation: document.getElementById('detailTranslation'),
    detailConjugation: document.getElementById('detailConjugation'),
    backToList: document.getElementById('backToList'),
    totalExercises: document.getElementById('totalExercises'),
    correctAnswers: document.getElementById('correctAnswers'),
    accuracy: document.getElementById('accuracy'),
    learnedVerbs: document.getElementById('learnedVerbs'),
    difficultVerbs: document.getElementById('difficultVerbs'),
    resetStats: document.getElementById('resetStats')
};

// Инициализация приложения
function init() {
    loadState();
    setupEventListeners();
    renderPractice();
    renderVerbList();
    renderStats();
    registerServiceWorker();
}

// Загрузка состояния из localStorage
function loadState() {
    const saved = localStorage.getItem('frenchVerbsState');
    if (saved) {
        const parsed = JSON.parse(saved);
        appState = {
            ...appState,
            ...parsed,
            learnedVerbs: new Set(parsed.learnedVerbs || [])
        };
    }
}

// Сохранение состояния
function saveState() {
    const toSave = {
        ...appState,
        learnedVerbs: Array.from(appState.learnedVerbs)
    };
    localStorage.setItem('frenchVerbsState', JSON.stringify(toSave));
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Переключение вкладок
    elements.tabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Выбор времени
    elements.tenseSelect.addEventListener('change', (e) => {
        appState.currentTense = e.target.value;
        renderPractice();
    });

    // Проверка ответа
    elements.checkBtn.addEventListener('click', checkAnswer);

    // Следующий вопрос
    elements.nextBtn.addEventListener('click', nextQuestion);

    // Поиск глаголов
    elements.searchVerb.addEventListener('input', (e) => {
        renderVerbList(e.target.value);
    });

    // Возврат к списку
    elements.backToList.addEventListener('click', () => {
        elements.verbDetail.style.display = 'none';
        elements.verbList.style.display = 'grid';
    });

    // Сброс статистики
    elements.resetStats.addEventListener('click', resetStats);

    // Enter для проверки
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && elements.checkBtn.style.display !== 'none') {
            checkAnswer();
        }
    });
}

// Переключение вкладок
function switchTab(tabName) {
    elements.tabs.forEach(tab => tab.classList.remove('active'));
    elements.tabContents.forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');

    if (tabName === 'stats') {
        renderStats();
    }
}

// Отрисовка практики
function renderPractice() {
    const verb = irregularVerbs[appState.currentVerbIndex];
    elements.currentVerb.textContent = verb.infinitive;
    elements.verbTranslation.textContent = verb.translation;
    elements.tenseSelect.value = appState.currentTense;

    const conjugation = verb.conjugations[appState.currentTense];
    const pronouns = [
        { key: 'je', label: 'Je' },
        { key: 'tu', label: 'Tu' },
        { key: 'il', label: 'Il/Elle' },
        { key: 'nous', label: 'Nous' },
        { key: 'vous', label: 'Vous' },
        { key: 'ils', label: 'Ils/Elles' }
    ];

    elements.conjugationForm.innerHTML = pronouns.map(p => `
        <div class="form-row">
            <label>${p.label}</label>
            <input type="text" data-pronoun="${p.key}" placeholder="Введите форму" autocomplete="off">
        </div>
    `).join('');

    elements.feedback.textContent = '';
    elements.feedback.className = 'feedback';
    elements.checkBtn.style.display = 'inline-block';
    elements.nextBtn.style.display = 'none';

    updateScoreDisplay();
}

// Проверка ответа
function checkAnswer() {
    const verb = irregularVerbs[appState.currentVerbIndex];
    const conjugation = verb.conjugations[appState.currentTense];
    const inputs = elements.conjugationForm.querySelectorAll('input');
    let allCorrect = true;
    let errorCount = 0;

    inputs.forEach(input => {
        const pronoun = input.dataset.pronoun;
        const userAnswer = normalizeText(input.value);
        const correctAnswer = normalizeText(conjugation[pronoun]);

        if (userAnswer === correctAnswer) {
            input.classList.remove('error');
            input.classList.add('correct');
        } else {
            input.classList.remove('correct');
            input.classList.add('error');
            allCorrect = false;
            errorCount++;
        }
    });

    // Обновление статистики
    appState.totalExercises++;
    if (allCorrect) {
        appState.correctAnswers++;
        appState.streak++;
        appState.score += 10 + appState.streak;
        appState.learnedVerbs.add(verb.infinitive);
        
        elements.feedback.textContent = '✅ Excellent! Все верно!';
        elements.feedback.className = 'feedback success';
    } else {
        appState.streak = 0;
        elements.feedback.textContent = `❌ Ошибок: ${errorCount}. Правильные ответы показаны.`;
        elements.feedback.className = 'feedback error';
        
        // Показываем правильные ответы
        inputs.forEach(input => {
            const pronoun = input.dataset.pronoun;
            if (input.classList.contains('error')) {
                input.value = conjugation[pronoun];
            }
        });
    }

    // Обновление статистики глагола
    if (!appState.verbStats[verb.infinitive]) {
        appState.verbStats[verb.infinitive] = { attempts: 0, errors: 0 };
    }
    appState.verbStats[verb.infinitive].attempts++;
    appState.verbStats[verb.infinitive].errors += errorCount;

    saveState();
    updateScoreDisplay();

    elements.checkBtn.style.display = 'none';
    elements.nextBtn.style.display = 'inline-block';
}

// Нормализация текста для сравнения
function normalizeText(text) {
    return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

// Следующий вопрос
function nextQuestion() {
    appState.currentVerbIndex = (appState.currentVerbIndex + 1) % irregularVerbs.length;
    renderPractice();
}

// Обновление отображения счета
function updateScoreDisplay() {
    elements.score.textContent = appState.score;
    elements.streak.textContent = appState.streak;
}

// Отрисовка списка глаголов
function renderVerbList(searchTerm = '') {
    const filtered = irregularVerbs.filter(v => 
        v.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.translation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    elements.verbList.innerHTML = filtered.map(verb => `
        <div class="verb-item" data-verb="${verb.infinitive}">
            <strong>${verb.infinitive}</strong>
            <span>${verb.translation}</span>
        </div>
    `).join('');

    // Обработчики кликов
    elements.verbList.querySelectorAll('.verb-item').forEach(item => {
        item.addEventListener('click', () => showVerbDetail(item.dataset.verb));
    });
}

// Показать детали глагола
function showVerbDetail(infinitive) {
    const verb = irregularVerbs.find(v => v.infinitive === infinitive);
    if (!verb) return;

    elements.verbList.style.display = 'none';
    elements.verbDetail.style.display = 'block';
    elements.detailVerb.textContent = verb.infinitive;
    elements.detailTranslation.textContent = verb.translation;

    const tenses = {
        present: 'Présent',
        imparfait: 'Imparfait',
        futur: 'Futur Simple',
        passe_compose: 'Passé Composé'
    };

    const pronouns = {
        je: 'Je',
        tu: 'Tu',
        il: 'Il/Elle',
        nous: 'Nous',
        vous: 'Vous',
        ils: 'Ils/Elles'
    };

    let html = '';
    for (const [tenseKey, tenseName] of Object.entries(tenses)) {
        html += `<div class="tense-block"><h4>${tenseName}</h4><div class="conjugation-grid">`;
        for (const [pronoun, form] of Object.entries(verb.conjugations[tenseKey])) {
            html += `<div class="conj-item"><span class="pronoun">${pronouns[pronoun]}</span><span class="form">${form}</span></div>`;
        }
        html += '</div></div>';
    }

    elements.detailConjugation.innerHTML = html;
}

// Отрисовка статистики
function renderStats() {
    elements.totalExercises.textContent = appState.totalExercises;
    elements.correctAnswers.textContent = appState.correctAnswers;
    
    const accuracy = appState.totalExercises > 0 
        ? Math.round((appState.correctAnswers / appState.totalExercises) * 100) 
        : 0;
    elements.accuracy.textContent = `${accuracy}%`;
    elements.learnedVerbs.textContent = appState.learnedVerbs.size;

    // Сложные глаголы
    const difficult = Object.entries(appState.verbStats)
        .filter(([_, stats]) => stats.attempts >= 2)
        .sort((a, b) => (b[1].errors / b[1].attempts) - (a[1].errors / a[1].attempts))
        .slice(0, 5);

    if (difficult.length > 0) {
        elements.difficultVerbs.innerHTML = difficult.map(([verb, stats]) => {
            const accuracy = Math.round(((stats.attempts - stats.errors) / stats.attempts) * 100);
            return `
                <div class="difficult-item">
                    <span>${verb}</span>
                    <span class="accuracy-badge">${accuracy}%</span>
                </div>
            `;
        }).join('');
    } else {
        elements.difficultVerbs.innerHTML = '<p>Пока нет данных</p>';
    }
}

// Сброс статистики
function resetStats() {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
        appState = {
            currentVerbIndex: 0,
            currentTense: 'present',
            score: 0,
            streak: 0,
            totalExercises: 0,
            correctAnswers: 0,
            verbStats: {},
            learnedVerbs: new Set()
        };
        saveState();
        renderStats();
        renderPractice();
    }
}

// Регистрация Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(err => console.error('SW registration failed:', err));
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);