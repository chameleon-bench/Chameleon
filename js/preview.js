/**
 * Sample-query preview.
 *
 * Loads the compact index produced by scripts/build_web_preview.py and renders
 * it as a table. Clicking a row expands the full SQL underneath, so long
 * queries do not stretch the layout.
 */
(function () {
    'use strict';

    var PAGE_SIZE = 20;
    var all = [];
    var filtered = [];
    var shown = 0;

    var bodyEl = document.getElementById('previewBody');
    var countEl = document.getElementById('previewCount');
    var moreBtn = document.getElementById('previewMore');
    var diffEl = document.getElementById('previewDifficulty');
    var dialectEl = document.getElementById('previewDialect');


    if (!bodyEl || !countEl || !moreBtn) {
        return;
    }

    function makeBadge(text, className) {
        var span = document.createElement('span');
        span.className = 'preview-badge ' + className;
        span.textContent = text;
        return span;
    }

    function oneLine(sql) {
        return sql.replace(/\s+/g, ' ').trim();
    }

    function renderRow(item) {
        var row = document.createElement('tr');
        row.className = 'preview-row';

        var diffCell = document.createElement('td');
        diffCell.appendChild(makeBadge(item.difficulty, 'preview-badge-' + item.difficulty.toLowerCase()));
        row.appendChild(diffCell);

        var dialectCell = document.createElement('td');
        dialectCell.appendChild(makeBadge(item.dialect, 'preview-badge-dialect'));
        row.appendChild(dialectCell);

        var sqlCell = document.createElement('td');
        sqlCell.className = 'preview-cell-sql';
        sqlCell.textContent = oneLine(item.sql);
        sqlCell.title = 'Click to expand';
        row.appendChild(sqlCell);

        var detail = document.createElement('tr');
        detail.className = 'preview-detail';
        detail.style.display = 'none';

        var detailCell = document.createElement('td');
        detailCell.colSpan = 3;

        var pre = document.createElement('pre');
        pre.className = 'preview-sql-full';
        pre.textContent = item.sql;
        detailCell.appendChild(pre);
        detail.appendChild(detailCell);

        row.addEventListener('click', function () {
            var open = detail.style.display !== 'none';
            detail.style.display = open ? 'none' : 'table-row';
            row.classList.toggle('is-open', !open);
        });

        return [row, detail];
    }

    function render(reset) {
        if (reset) {
            bodyEl.innerHTML = '';
            shown = 0;
        }

        var slice = filtered.slice(shown, shown + PAGE_SIZE);
        slice.forEach(function (item) {
            renderRow(item).forEach(function (node) {
                bodyEl.appendChild(node);
            });
        });
        shown += slice.length;

        if (filtered.length === 0) {
            countEl.textContent = 'No matching queries';
        } else if (shown < filtered.length) {
            countEl.textContent = filtered.length + ' queries · showing ' + shown;
        } else {
            countEl.textContent = filtered.length + ' queries';
        }

        moreBtn.style.display = shown < filtered.length ? 'inline-flex' : 'none';
    }

    function applyFilters() {
        var difficulty = diffEl.value;
        var dialect = dialectEl.value;

        filtered = all.filter(function (item) {
            if (difficulty && item.difficulty !== difficulty) {
                return false;
            }
            if (dialect && item.dialect !== dialect) {
                return false;
            }
            return true;
        });

        render(true);
    }

    diffEl.addEventListener('change', applyFilters);
    dialectEl.addEventListener('change', applyFilters);
    moreBtn.addEventListener('click', function () {
        render(false);
    });

    fetch('data/query_samples.json')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            all = data;
            filtered = data;
            render(true);
        })
        .catch(function (error) {
            countEl.textContent = 'Preview data unavailable';
            console.error('Failed to load preview data:', error);
        });
})();
