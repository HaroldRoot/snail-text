const snailResults = [
    {
        id: "art-snail",
        name: "艺术蜗牛",
        description: "沉迷画画，无法自拔"
    },
    {
        id: "ballet_shoes-snail",
        name: "芭蕾舞鞋里的蜗牛",
        description: "你是不是有什么特殊癖好？"
    },
    {
        id: "battery-snail",
        name: "一颗蜗牛电池",
        description: "充电两小时，通话五分钟"
    },
    {
        id: "bell-snail",
        name: "一个蜗牛铃铛",
        description: "叮当"
    },
    {
        id: "beverage_box-snail",
        name: "一盒蜗牛饮料",
        description: "喝一口，补充每日所需黏液"
    },
    {
        id: "black_joker-snail",
        name: "一张蜗牛牌",
        description: "王炸，但要等一万轮才能生效"
    },
    {
        id: "books-snail",
        name: "爱读书的蜗牛",
        description: "知识的积累是缓慢的，就像蜗牛一样"
    },
    {
        id: "bowling-snail",
        name: "保龄球蜗牛",
        description: "球道很长，慢慢滚"
    },
    {
        id: "bread-snail",
        name: "面包蜗牛",
        description: "又香又软，爬不动了，先吃口自己"
    },
    {
        id: "bulb-snail",
        name: "灵光一闪的蜗牛",
        description: "啊哈！"
    },
    {
        id: "candy-snail",
        name: "糖果蜗牛",
        description: "甜甜的"
    },
    {
        id: "chains-snail",
        name: "挣脱束缚的蜗牛",
        description: "自由！"
    },
    {
        id: "cherries-snail",
        name: "樱桃蜗牛",
        description: "酸甜可口"
    },
    {
        id: "city_sunrise-snail",
        name: "极巨化蜗牛",
        description: "城市级灾害：黏液泛滥"
    },
    {
        id: "computer-snail",
        name: "程序员蜗牛",
        description: "代码和你有一个能跑就行"
    },
    {
        id: "dart-snail",
        name: "靶心的蜗牛",
        description: "跑不掉，认栽了"
    },
    {
        id: "dna-snail",
        name: "藏在DNA里的蜗牛",
        description: "刻在基因里的慢性子"
    },
    {
        id: "dotted_line_face-snail",
        name: "虚线蜗牛",
        description: "存在感很低"
    },
    {
        id: "film_frames-snail",
        name: "电影胶卷上的蜗牛",
        description: "慢动作"
    },
    {
        id: "fish-snail",
        name: "被鱼咬住的蜗牛",
        description: "逃不掉了"
    },
    {
        id: "fishing_pole_and_fish-snail",
        name: "被鱼竿钓上来的蜗牛",
        description: "钓鱼佬很失望"
    },
    {
        id: "floppy_disk-snail",
        name: "一张蜗牛软盘",
        description: "里面存着什么秘密学习资料呢？"
    },
    {
        id: "flying_saucer-snail",
        name: "被UFO吸走的蜗牛",
        description: "再见了地球"
    },
    {
        id: "frame_with_picture-snail",
        name: "世界名画里的蜗牛",
        description: "在卢浮宫展出"
    },
    {
        id: "fried_egg-snail",
        name: "蜗牛大厨",
        description: "拒绝做法师蒜香焗蜗牛"
    },
    {
        id: "gift-snail",
        name: "驮着礼物的蜗牛",
        description: "圣诞礼物，明年送到"
    },
    {
        id: "goal_net-snail",
        name: "守门员蜗牛",
        description: "一个球也没拦住"
    },
    {
        id: "headphones-snail",
        name: "随身携带耳机的蜗牛",
        description: "你这家伙有耳朵吗？"
    },
    {
        id: "high_heel-snail",
        name: "高跟鞋里的蜗牛",
        description: "你是不是有什么奇怪的癖好？"
    },
    {
        id: "ice_cube-snail",
        name: "冰块上的蜗牛",
        description: "你这一生，如履薄冰……"
    },
    {
        id: "infinity-snail",
        name: "无限蜗牛",
        description: "永远无法抵达蜗牛的真实"
    },
    {
        id: "iphone-snail",
        name: "手机壁纸里的蜗牛",
        description: "其实是动得很慢的动态壁纸"
    },
    {
        id: "jigsaw-snail",
        name: "一块不完整的蜗牛拼图",
        description: "神蜗见尾不见首"
    },
    {
        id: "ladybug-snail",
        name: "瓢虫蜗牛",
        description: "飞起来就快了"
    },
    {
        id: "lemon-snail",
        name: "柠檬蜗牛",
        description: "那一天的犹豫，犹豫起来"
    },
    {
        id: "lightning-snail",
        name: "被闪电击中的蜗牛",
        description: "别电了！别电了！"
    },
    {
        id: "linked_paperclips-snail",
        name: "一张蜗牛便利贴",
        description: "提醒人们欲速则不达"
    },
    {
        id: "lower_left_crayon-snail",
        name: "一支蜗牛牌蜡笔",
        description: "一笔一笔亲手去绘画的感觉真好"
    },
    {
        id: "magnet-snail",
        name: "磁力蜗牛",
        description: "正在通过磁力链接缓慢下载学习资料"
    },
    {
        id: "mag_right-snail",
        name: "蜗牛侦探",
        description: "案子破了，但凶手老死了"
    },
    {
        id: "melting_face-snail",
        name: "融化的蜗牛",
        description: "谁对你撒盐了？"
    },
    {
        id: "microscope-snail",
        name: "培养皿中的蜗牛",
        description: "准备被放到显微镜下观察"
    },
    {
        id: "mortar_board-snail",
        name: "光荣毕业的蜗牛",
        description: "用了十年读完博士，现在可以慢慢找工作了"
    },
    {
        id: "motorway-snail",
        name: "高速公路上的蜗牛",
        description: "误闯天家"
    },
    {
        id: "mouse_trap-snail",
        name: "爬入陷阱的蜗牛",
        description: "奶酪都过期了"
    },
    {
        id: "mushroom-snail",
        name: "蘑菇蜗牛",
        description: "喜欢呆在阴暗潮湿的地方"
    },
    {
        id: "ocean-snail",
        name: "冲浪的蜗牛",
        description: "顺势借力"
    },
    {
        id: "owl-snail",
        name: "猫头鹰头蜗牛",
        description: "头可以一百八十度旋转"
    },
    {
        id: "package-snail",
        name: "一个印着蜗牛图案的包裹",
        description: "十年才送到的慢递"
    },
    {
        id: "pager-snail",
        name: "传呼机蜗牛",
        description: "有一条来自上世纪的通知"
    },
    {
        id: "parachute-snail",
        name: "使用滑翔伞的蜗牛",
        description: "正在逃离追捕"
    },
    {
        id: "partly_sunny-snail",
        name: "躲在云后面的太阳蜗牛",
        description: "比较害羞"
    },
    {
        id: "pizza-snail",
        name: "披萨蜗牛",
        description: "披萨只有六片八片十二片，永远没有欺骗（七片）"
    },
    {
        id: "question-snail",
        name: "疑惑的蜗牛",
        description: "？我是谁？我在哪？我要爬去哪里？"
    },
    {
        id: "radioactive_sign-snail",
        name: "辐射变异蜗牛",
        description: "在夜晚还会发光喔"
    },
    {
        id: "roller_coaster-snail",
        name: "坐过山车的蜗牛",
        description: "快到飞起"
    },
    {
        id: "scissors-snail",
        name: "被剪刀剪碎的蜗牛",
        description: "哦不……"
    },
    {
        id: "seedling-snail",
        name: "小草神蜗牛",
        description: "智慧的化身"
    },
    {
        id: "shark-snail",
        name: "蜗鲨",
        description: "看过鲨卷风吗？"
    },
    {
        id: "shirt-snail",
        name: "一件印着蜗牛图案的衬衫",
        description: "无法速干的潮流单品，寓意是慢生活"
    },
    {
        id: "shrug-snail",
        name: "耸肩蜗牛",
        description: "等等，你为什么会有手？"
    },
    {
        id: "ski-snail",
        name: "滑雪蜗牛",
        description: ""
    },
    {
        id: "snail-alien",
        name: "外星蜗牛",
        description: "第三类接触"
    },
    {
        id: "snail-avocado",
        name: "牛油果蜗牛",
        description: "做成奶昔肯定很好喝"
    },
    {
        id: "snail-bat",
        name: "蝙蝠蜗牛",
        description: "小小吸血鬼"
    },
    {
        id: "snail-bee",
        name: "蜜蜂蜗牛",
        description: "一只小蜜蜂呀，飞到花丛中呀"
    },
    {
        id: "snail-birthday",
        name: "生日蛋糕蜗牛",
        description: "真的能在当天送到小寿星手里吗？"
    },
    {
        id: "snail-blossom",
        name: "花朵蜗牛",
        description: "卖萌中"
    },
    {
        id: "snail-bouquet",
        name: "带着一束花的蜗牛",
        description: "送给心爱之人"
    },
    {
        id: "snail-cactus",
        name: "仙人掌蜗牛",
        description: "带刺"
    },
    {
        id: "snail-cheese_wedge",
        name: "奶酪蜗牛",
        description: "杰瑞的最爱"
    },
    {
        id: "snail-cloud",
        name: "云朵蜗牛",
        description: "天气预报"
    },
    {
        id: "snail-coffee",
        name: "咖啡蜗牛",
        description: "喝一口提提神"
    },
    {
        id: "snail-cold_face",
        name: "冰冷蜗牛",
        description: "变成冰雕了"
    },
    {
        id: "snail-confetti_ball",
        name: "中奖的幸运蜗牛",
        description: "恭喜恭喜"
    },
    {
        id: "snail-corn",
        name: "玉米蜗牛",
        description: "喜欢看cornhub"
    },
    {
        id: "snail-crown",
        name: "王冠蜗牛",
        description: "蜗牛国国王"
    },
    {
        id: "snail-crystal_ball",
        name: "水晶球蜗牛",
        description: "可以占卜未来"
    },
    {
        id: "snail-earth_africa",
        name: "地球蜗牛",
        description: "背负整个世界，所以走得慢"
    },
    {
        id: "snail-face_in_clouds",
        name: "藏在迷雾中的蜗牛",
        description: "朦朦胧胧"
    },
    {
        id: "snail-face_with_symbols_on_mouth",
        name: "说脏话蜗牛",
        description: "虽然爬得慢，但嘴巴像机关枪一样"
    },
    {
        id: "snail-fire",
        name: "火焰蜗牛",
        description: "烧起来了！"
    },
    {
        id: "snail-gem",
        name: "宝石蜗牛",
        description: "来自宝石之国的小蜗"
    },
    {
        id: "snail-ghost",
        name: "幽灵蜗牛",
        description: "阿飘"
    },
    {
        id: "snail-gift_heart",
        name: "漂亮的蜗牛",
        description: "粉色很可爱对吧"
    },
    {
        id: "snail-heartbeat",
        name: "重影蜗牛",
        description: "跟你说了撸多会眼花吧"
    },
    {
        id: "snail-hedgehog",
        name: "刺猬蜗牛",
        description: "蜗牛界的刺头！"
    },
    {
        id: "snail-hole",
        name: "洞穴蜗牛",
        description: "深居简出，偶尔探头"
    },
    {
        id: "snail-hotdog",
        name: "热狗蜗牛",
        description: "夹着它的不是面包，是命运"
    },
    {
        id: "snail-hot_face",
        name: "火热蜗牛",
        description: "身体好热喔，谁给我下药了？"
    },
    {
        id: "snail-hot_pepper",
        name: "辣椒蜗牛",
        description: "能烧死一排僵尸吗？"
    },
    {
        id: "snail-imp",
        name: "小恶魔蜗牛",
        description: "不嘻嘻"
    },
    {
        id: "snail-innocent",
        name: "天使蜗牛",
        description: "博爱"
    },
    {
        id: "snail-jack_o_lantern",
        name: "南瓜蜗牛",
        description: "等到万圣节的时候可以雕刻鬼脸"
    },
    {
        id: "snail-knife_fork_plate",
        name: "即将被吃掉的蜗牛",
        description: "客人确定要生吃吗？"
    },
    {
        id: "snail-octopus",
        name: "驮着章鱼的蜗牛",
        description: "怎么会这样？"
    },
    {
        id: "snail-pineapple",
        name: "菠萝蜗牛",
        description: "是谁住在深海的大菠萝里？"
    },
    {
        id: "snail-rage",
        name: "愤怒蜗牛",
        description: "生气气！"
    },
    {
        id: "snail-rainbow",
        name: "彩虹蜗牛",
        description: "碰上彩虹，吃定彩虹"
    },
    {
        id: "snail-robot_face",
        name: "机器人蜗牛",
        description: "0111001101101110011000010110100101101100"
    },
    {
        id: "snail-scorpion",
        name: "蝎子蜗牛",
        description: "刺有慢性毒"
    },
    {
        id: "snail-skull",
        name: "从骷髅头里冒出来的蜗牛",
        description: "识骨寻踪"
    },
    {
        id: "snail-smiling_imp",
        name: "正在坏笑的小恶魔蜗牛",
        description: "桀桀桀……"
    },
    {
        id: "snail-snail",
        name: "带崽蜗牛",
        description: "相对静止"
    },
    {
        id: "snail-snowman_without_snow",
        name: "雪人蜗牛",
        description: "有着胡萝卜鼻子"
    },
    {
        id: "snail-spider",
        name: "蜘蛛蜗牛",
        description: "四眼仔"
    },
    {
        id: "snail-sun_with_face",
        name: "太阳蜗牛",
        description: "缓慢升起"
    },
    {
        id: "snail-tornado",
        name: "龙卷风蜗牛",
        description: "卷走了超人的养父"
    },
    {
        id: "snail-tulip",
        name: "郁金香蜗牛",
        description: "爱美之心蜗亦有之"
    },
    {
        id: "snail-turtle",
        name: "乌龟蜗牛",
        description: "慢上加慢"
    },
    {
        id: "snail-upside_down_face",
        name: "上下颠倒的蜗牛",
        description: "在天花板上爬行"
    },
    {
        id: "snake-snail",
        name: "蜗蛇",
        description: "滑滑的"
    },
    {
        id: "soap-snail",
        name: "正在洗澡的蜗牛",
        description: "哎呀，被看光光了"
    },
    {
        id: "space_invader-snail",
        name: "像素蜗牛",
        description: "来自异次元"
    },
    {
        id: "speaking_head_in_silhouette-snail",
        name: "潜藏在人类意识中的蜗牛",
        description: "没人发现蜗牛正在偷偷占领世界"
    },
    {
        id: "strawberry-snail",
        name: "草莓蜗牛",
        description: "士多啤梨"
    },
    {
        id: "sunrise_over_mountains-snail",
        name: "比山还大的蜗牛",
        description: "身后光芒万丈"
    },
    {
        id: "tiger-snail",
        name: "虎纹蜗牛",
        description: "会不会和虎皮蛋糕卷一样好吃？"
    },
    {
        id: "tomato-snail",
        name: "番茄蜗牛",
        description: "毛秀才"
    },
    {
        id: "truck-snail",
        name: "一辆印着蜗牛图案的货车",
        description: "不知道里面装着什么呢？"
    },
    {
        id: "umbrella-snail",
        name: "雨伞蜗牛",
        description: "无惧大雨滂沱"
    },
    {
        id: "volcano-snail",
        name: "火山蜗牛",
        description: "爆发了！"
    },
    {
        id: "watermelon-snail",
        name: "西瓜蜗牛",
        description: "夏日必备"
    },
    {
        id: "wind_blowing_face-snail",
        name: "风神蜗牛",
        description: "吹吹"
    },
    {
        id: "wood-snail",
        name: "木头蜗牛",
        description: "看起来比较木讷"
    },
];

const testArea = document.getElementById('test-area');
const resultArea = document.getElementById('result-area');
const progressCircle = document.getElementById('progress-circle');
const progressText = document.getElementById('progress-text');
const progressPercentage = document.getElementById('progress-percentage');
const pressHint = document.getElementById('press-hint');
const instruction = document.getElementById('instruction');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const retestButton = document.getElementById('retest-button');

const circumference = 2 * Math.PI * 85;
const requiredHoldTime = 3000;
let startTime = 0;
let isHolding = false;
let progressInterval;

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;


let savedResult = null;
try {
    savedResult = localStorage.getItem('snailTestResult');
    if (savedResult) {
        showResult(JSON.parse(savedResult));
    }
} catch (error) {
    console.error('读取本地存储失败:', error);
    localStorage.removeItem('snailTestResult');
    savedResult = null;
}


function handleHoldStart(e) {
    e.preventDefault();

    if (localStorage.getItem('snailTestResult')) return;

    isHolding = true;
    startTime = Date.now();

    progressText.classList.remove('hidden');
    pressHint.classList.add('hidden');
    instruction.textContent = '正在测试中...';

    progressInterval = setInterval(updateProgress, 30);

    testArea.classList.add('scale-105');
    testArea.style.transition = 'transform 0.2s';
}


function handleHoldEnd() {
    if (localStorage.getItem('snailTestResult')) return;

    isHolding = false;
    clearInterval(progressInterval);

    resetProgress();

    testArea.classList.remove('scale-105');
    instruction.textContent = '将手指放到屏幕中间区域，长按汲取蜗牛元素';
}


function updateProgress() {
    if (!isHolding) return;

    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(elapsedTime / requiredHoldTime, 1);
    const offset = circumference - (progress * circumference);

    progressCircle.style.strokeDashoffset = offset;

    let percentage = Math.floor(progress * 100);

    if (progress >= 1) {
        percentage = 100;
    }

    progressPercentage.textContent = `${percentage}%`;

    if (progress >= 1) {
        clearInterval(progressInterval);
        generateResult();
    }
}


function resetProgress() {
    clearInterval(progressInterval);
    progressCircle.style.strokeDashoffset = circumference;
    progressText.classList.add('hidden');
    pressHint.classList.remove('hidden');
    progressPercentage.textContent = '0%';
}


function generateResult() {
    try {
        playSound('complete');

        const randomIndex = Math.floor(Math.random() * snailResults.length);
        const result = snailResults[randomIndex];

        localStorage.setItem('snailTestResult', JSON.stringify(result));

        showResult(result);
    } catch (error) {
        console.error('生成结果失败:', error);
        alert('生成结果失败，请重试！');
        resetProgress();
        instruction.textContent = '长按屏幕中间区域，看看你是什么蜗牛！';
    }
}


function showResult(result) {
    testArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    const imageSrc = `images/${result.id}.png`;
    resultEmoji.src = imageSrc;
    resultEmoji.alt = result.name;
    resultTitle.textContent = result.name;
    resultDescription.textContent = result.description;

    resultEmoji.onerror = function () {
        resultEmoji.src = 'images/snail.png';
    };

    resultArea.style.opacity = '0';
    resultArea.style.transform = 'translateY(20px)';
    resultArea.style.transition = 'opacity 0.5s, transform 0.5s';

    setTimeout(() => {
        resultArea.style.opacity = '1';
        resultArea.style.transform = 'translateY(0)';
    }, 10);
}


function playSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        if (type === 'complete') {
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); oscillator.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);

            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.3);
        }
    } catch (error) {
        console.error('播放音效失败:', error);
    }
}


function handleRetest() {
    try {
        localStorage.removeItem('snailTestResult');

        resetProgress();

        testArea.classList.remove('hidden');
        resultArea.classList.add('hidden');

        instruction.textContent = '长按屏幕中间区域，看看你是什么蜗牛！';
    } catch (error) {
        console.error('重新测试失败:', error);
    }
}


try {
    const progressContainer = document.querySelector('.progress-container');

    if (progressContainer) {
        progressContainer.addEventListener('mousedown', handleHoldStart);
        progressContainer.addEventListener('touchstart', handleHoldStart);
    }

    document.addEventListener('mouseup', handleHoldEnd);
    document.addEventListener('touchend', handleHoldEnd);
    document.addEventListener('touchcancel', handleHoldEnd);

    retestButton.addEventListener('click', handleRetest);
} catch (error) {
    console.error('添加事件监听失败:', error);
}