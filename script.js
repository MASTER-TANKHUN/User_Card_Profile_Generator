document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');
    const updateButton = document.getElementById('updateCard');
    const resetButton = document.getElementById('resetForm');
    const randomizeButton = document.getElementById('randomize');
    const downloadButton = document.getElementById('downloadHTML');
    const copyCodeButton = document.getElementById('copyCode');
    const codeOutput = document.getElementById('codeOutput');
    const templates = document.querySelectorAll('.template');
    const nameInput = document.getElementById('name');
    const titleInput = document.getElementById('title');
    const bioInput = document.getElementById('bio');
    const profileImageInput = document.getElementById('profileImage');
    const stat1LabelInput = document.getElementById('stat1Label');
    const stat1ValueInput = document.getElementById('stat1Value');
    const stat2LabelInput = document.getElementById('stat2Label');
    const stat2ValueInput = document.getElementById('stat2Value');
    const stat3LabelInput = document.getElementById('stat3Label');
    const stat3ValueInput = document.getElementById('stat3Value');    
    const social1TypeInput = document.getElementById('social1Type');
    const social1UrlInput = document.getElementById('social1Url');
    const social2TypeInput = document.getElementById('social2Type');
    const social2UrlInput = document.getElementById('social2Url');
    const social3TypeInput = document.getElementById('social3Type');
    const social3UrlInput = document.getElementById('social3Url');    
    const headerColorInput = document.getElementById('headerColor');
    const nameColorInput = document.getElementById('nameColor');
    const socialColorInput = document.getElementById('socialColor');
    const cardPreview = document.getElementById('cardPreview');
    const previewHeader = cardPreview.querySelector('.card-header');
    const previewImg = document.getElementById('previewImg');
    const previewName = document.getElementById('previewName');
    const previewTitle = document.getElementById('previewTitle');
    const previewBio = document.getElementById('previewBio');    
    const previewStat1Label = document.getElementById('previewStat1Label');
    const previewStat1Value = document.getElementById('previewStat1Value');
    const previewStat2Label = document.getElementById('previewStat2Label');
    const previewStat2Value = document.getElementById('previewStat2Value');
    const previewStat3Label = document.getElementById('previewStat3Label');
    const previewStat3Value = document.getElementById('previewStat3Value');  
    const previewSocial1 = document.getElementById('previewSocial1');
    const previewSocial2 = document.getElementById('previewSocial2');
    const previewSocial3 = document.getElementById('previewSocial3');
    let currentTemplate = 'basic';

    function updateCardPreview() {
        previewHeader.style.backgroundColor = headerColorInput.value;
        previewName.style.color = nameColorInput.value;
        previewSocial1.style.backgroundColor = socialColorInput.value;
        previewSocial2.style.backgroundColor = socialColorInput.value;
        previewSocial3.style.backgroundColor = socialColorInput.value;
        
        previewName.textContent = nameInput.value || 'John Doe';
        previewTitle.textContent = titleInput.value || 'Professional Title';
        previewBio.textContent = bioInput.value || 'Bio information goes here...';
        
        if (profileImageInput.value) {
            previewImg.innerHTML = `<img src="${profileImageInput.value}" alt="${nameInput.value}" style="width: 100%; height: 100%; object-fit: cover;">`;
        } else {
            const nameParts = (nameInput.value || 'John Doe').split(' ');
            const initials = nameParts.length > 1 
                ? `${nameParts[0][0]}${nameParts[1][0]}` 
                : nameParts[0].substring(0, 2);
            previewImg.innerHTML = `<span>${initials}</span>`;
        }
        
        previewStat1Label.textContent = stat1LabelInput.value || 'Stat 1';
        previewStat1Value.textContent = stat1ValueInput.value || '0';
        previewStat2Label.textContent = stat2LabelInput.value || 'Stat 2';
        previewStat2Value.textContent = stat2ValueInput.value || '0';
        previewStat3Label.textContent = stat3LabelInput.value || 'Stat 3';
        previewStat3Value.textContent = stat3ValueInput.value || '0';
        
        previewSocial1.textContent = getSocialIcon(social1TypeInput.value);
        previewSocial2.textContent = getSocialIcon(social2TypeInput.value);
        previewSocial3.textContent = getSocialIcon(social3TypeInput.value);
    }
    
    function getSocialIcon(type) {
        switch(type) {
            case 'twitter': return 'tw';
            case 'linkedin': return 'in';
            case 'github': return 'gh';
            case 'instagram': return 'ig';
            case 'facebook': return 'fb';
            default: return '';
        }
    }
    
    function resetForm() {
        nameInput.value = 'MASTER T';
        titleInput.value = 'Full-Stack';
        bioInput.value = 'Passionate about building websites, with over 3 years of experience in developing user-centered web applications.';
        profileImageInput.value = '';
        
        stat1LabelInput.value = 'Projects';
        stat1ValueInput.value = '24';
        stat2LabelInput.value = 'Clients';
        stat2ValueInput.value = '18';
        stat3LabelInput.value = 'Reviews';
        stat3ValueInput.value = '42';
        
        social1TypeInput.value = 'linkedin';
        social1UrlInput.value = 'https://linkedin.com';
        social2TypeInput.value = 'twitter';
        social2UrlInput.value = 'https://twitter.com';
        social3TypeInput.value = 'instagram';
        social3UrlInput.value = 'https://instagram.com';
        
        headerColorInput.value = '#3498db';
        nameColorInput.value = '#333333';
        socialColorInput.value = '#3498db';
        
        templates.forEach(t => t.classList.remove('active'));
        templates[0].classList.add('active');
        currentTemplate = 'basic';
    }
    
    function randomizeCard() {
        const names = ['Alex Morgan', 'Jamie Smith', 'Taylor Jones', 'Jordan Williams', 'Casey Brown'];
        const titles = ['Software Engineer', 'Digital Marketer', 'Product Designer', 'Content Creator', 'Data Scientist'];
        const bios = [
            'Full-stack developer with a passion for building scalable web applications.',
            'Creating engaging content and driving marketing strategies for brands.',
            'Turning complex problems into simple, beautiful designs.',
            'Passionate about storytelling through various digital mediums.',
            'Using data to extract meaningful insights and drive business decisions.'
        ];
        
        const statLabels = ['Projects', 'Clients', 'Rating', 'Posts', 'Awards', 'Years', 'Skills'];
        const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c', '#34495e'];
        
        nameInput.value = names[Math.floor(Math.random() * names.length)];
        titleInput.value = titles[Math.floor(Math.random() * titles.length)];
        bioInput.value = bios[Math.floor(Math.random() * bios.length)];
        
        stat1LabelInput.value = statLabels[Math.floor(Math.random() * statLabels.length)];
        stat1ValueInput.value = Math.floor(Math.random() * 100);
        stat2LabelInput.value = statLabels[Math.floor(Math.random() * statLabels.length)];
        stat2ValueInput.value = Math.floor(Math.random() * 100);
        stat3LabelInput.value = statLabels[Math.floor(Math.random() * statLabels.length)];
        stat3ValueInput.value = Math.floor(Math.random() * 100);
        
        const randomSocial1 = ['twitter', 'linkedin', 'github', 'instagram', 'facebook'][Math.floor(Math.random() * 5)];
        const randomSocial2 = ['twitter', 'linkedin', 'github', 'instagram', 'facebook'][Math.floor(Math.random() * 5)];
        const randomSocial3 = ['twitter', 'linkedin', 'github', 'instagram', 'facebook'][Math.floor(Math.random() * 5)];
        
        social1TypeInput.value = randomSocial1;
        social2TypeInput.value = randomSocial2;
        social3TypeInput.value = randomSocial3;
        
        headerColorInput.value = colors[Math.floor(Math.random() * colors.length)];
        nameColorInput.value = '#333333';
        socialColorInput.value = colors[Math.floor(Math.random() * colors.length)];
        
        const randomTemplateIndex = Math.floor(Math.random() * templates.length);
        templates.forEach(t => t.classList.remove('active'));
        templates[randomTemplateIndex].classList.add('active');
        currentTemplate = templates[randomTemplateIndex].dataset.template;
        applyTemplate(currentTemplate);
    }
    
    function applyTemplate(template) {
        switch(template) {
            case 'basic':
                headerColorInput.value = '#3498db';
                nameColorInput.value = '#333333';
                socialColorInput.value = '#3498db';
                previewHeader.style.background = headerColorInput.value;
                cardPreview.style.background = '#fff';
                cardPreview.style.color = '#333';
                previewTitle.style.color = '#777';
                previewBio.style.color = '#555';
                break;
            case 'gradient':
                headerColorInput.value = '#3498db';
                nameColorInput.value = '#333333';
                socialColorInput.value = '#2ecc71';
                previewHeader.style.background = `linear-gradient(to right, ${headerColorInput.value}, ${socialColorInput.value})`;
                cardPreview.style.background = '#fff';
                cardPreview.style.color = '#333';
                previewTitle.style.color = '#777';
                previewBio.style.color = '#555';
                break;
            case 'dark':
                headerColorInput.value = '#333333';
                nameColorInput.value = '#ffffff';
                socialColorInput.value = '#3498db';
                previewHeader.style.background = headerColorInput.value;
                cardPreview.style.background = '#222';
                cardPreview.style.color = '#fff';
                previewTitle.style.color = '#aaa';
                previewBio.style.color = '#ddd';
                break;
            case 'minimal':
                headerColorInput.value = '#f5f5f5';
                nameColorInput.value = '#333333';
                socialColorInput.value = '#3498db';
                previewHeader.style.background = headerColorInput.value;
                previewHeader.style.borderBottom = '1px solid #ddd';
                cardPreview.style.background = '#fff';
                cardPreview.style.color = '#333';
                cardPreview.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                previewTitle.style.color = '#777';
                previewBio.style.color = '#555';
                break;
        }
        updateCardPreview();
    }
    
    function generateCode() {
        const name = nameInput.value || 'John Doe';
        const title = titleInput.value || 'Professional Title';
        const bio = bioInput.value || 'Bio information goes here...';
        const profileImage = profileImageInput.value;
        
        const stat1Label = stat1LabelInput.value || 'Stat 1';
        const stat1Value = stat1ValueInput.value || '0';
        const stat2Label = stat2LabelInput.value || 'Stat 2';
        const stat2Value = stat2ValueInput.value || '0';
        const stat3Label = stat3LabelInput.value || 'Stat 3';
        const stat3Value = stat3ValueInput.value || '0';
        
        const social1Type = social1TypeInput.value;
        const social1Url = social1UrlInput.value || '#';
        const social2Type = social2TypeInput.value;
        const social2Url = social2UrlInput.value || '#';
        const social3Type = social3TypeInput.value;
        const social3Url = social3UrlInput.value || '#';
        
        const headerColor = headerColorInput.value;
        const nameColor = nameColorInput.value;
        const socialColor = socialColorInput.value;
        
        const nameParts = name.split(' ');
        const initials = nameParts.length > 1 
            ? `${nameParts[0][0]}${nameParts[1][0]}` 
            : nameParts[0].substring(0, 2);
        
        let headerBackground = '';
        let cardBackground = '#ffffff';
        let textColor = '#333333';
        let titleColor = '#777777';
        let bioColor = '#555555';
        
        switch(currentTemplate) {
            case 'basic':
                headerBackground = headerColor;
                break;
            case 'gradient':
                headerBackground = `linear-gradient(to right, ${headerColor}, ${socialColor})`;
                break;
            case 'dark':
                headerBackground = headerColor;
                cardBackground = '#222222';
                textColor = '#ffffff';
                titleColor = '#aaaaaa';
                bioColor = '#dddddd';
                break;
            case 'minimal':
                headerBackground = headerColor;
                break;
        }
        
        let html = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Profile Card</title>
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f2f5;
            padding: 20px;
        }

        .card {
            width: 320px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            background-color: ${cardBackground};
            color: ${textColor};
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .card-header {
            height: 100px;
            position: relative;
            background: ${headerBackground};
            ${currentTemplate === 'minimal' ? 'border-bottom: 1px solid #ddd;' : ''}
        }

        .card-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid ${cardBackground};
            position: absolute;
            left: 50%;
            transform: translateX(-50%) translateY(50%);
            bottom: 0;
            background-color: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #aaa;
            font-size: 3rem;
            overflow: hidden;
        }

        .card-body {
            padding: 4rem 1.5rem 1.5rem;
            text-align: center;
        }

        .card-name {
            font-size: 1.5rem;
            margin-bottom: 0.25rem;
            font-weight: 700;
            color: ${nameColor};
        }

        .card-title {
            color: ${titleColor};
            margin-bottom: 1rem;
        }

        .card-bio {
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
            color: ${bioColor};
        }

        .card-stats {
            display: flex;
            justify-content: space-around;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid ${currentTemplate === 'dark' ? '#444' : '#eee'};
        }

        .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .stat-value {
            font-size: 1.25rem;
            font-weight: 700;
        }

        .stat-label {
            font-size: 0.8rem;
            color: ${currentTemplate === 'dark' ? '#888' : '#888'};
        }

        .card-social {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .social-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            background-color: ${socialColor};
            text-decoration: none;
        }
        </style>
        </head>
        <body>
        <div class="card">
        <div class="card-header">
            <div class="card-img">
                ${profileImage 
                    ? `<img src="${profileImage}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">` 
                    : `<span>${initials}</span>`}
            </div>
        </div>
        <div class="card-body">
            <h3 class="card-name">${name}</h3>
            <div class="card-title">${title}</div>
            <p class="card-bio">${bio}</p>
            
            <div class="card-stats">
                <div class="stat">
                    <div class="stat-value">${stat1Value}</div>
                    <div class="stat-label">${stat1Label}</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${stat2Value}</div>
                    <div class="stat-label">${stat2Label}</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${stat3Value}</div>
                    <div class="stat-label">${stat3Label}</div>
                </div>
            </div>
            
            <div class="card-social">
                <a href="${social1Url}" class="social-icon" target="_blank">${getSocialIcon(social1Type)}</a>
                <a href="${social2Url}" class="social-icon" target="_blank">${getSocialIcon(social2Type)}</a>
                <a href="${social3Url}" class="social-icon" target="_blank">${getSocialIcon(social3Type)}</a>
            </div>
        </div>
        </div>
        </body>
        </html>`;
        
        codeOutput.textContent = html;
    }
    
    function downloadHTML() {
        const html = codeOutput.textContent;
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'user-profile-card.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    updateCardPreview();
    generateCode();

    updateButton.addEventListener('click', function() {
        updateCardPreview();
        generateCode();
    });
    
    resetButton.addEventListener('click', function() {
        resetForm();
        updateCardPreview();
        generateCode();
    });
    
    randomizeButton.addEventListener('click', function() {
        randomizeCard();
        updateCardPreview();
        generateCode();
    });
    
    downloadButton.addEventListener('click', function() {
        downloadHTML();
    });
    
    copyCodeButton.addEventListener('click', function() {
        navigator.clipboard.writeText(codeOutput.textContent)
            .then(function() {
                copyCodeButton.textContent = 'Copied!';
                setTimeout(function() {
                    copyCodeButton.textContent = 'Copy Code';
                }, 2000);
            })
            .catch(function(err) {
                console.error('Could not copy text: ', err);
            });
    });
    
    templates.forEach(function(template) {
        template.addEventListener('click', function() {
            templates.forEach(function(t) { t.classList.remove('active'); });
            template.classList.add('active');
            currentTemplate = template.dataset.template;
            applyTemplate(currentTemplate);
            updateCardPreview();
            generateCode();
        });
    });
});