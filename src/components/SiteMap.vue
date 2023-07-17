<template>
  <div>
    <h2>极客飞兔 AI工具集<sub><el-link href="https://tinygeeker.gitee.io/menu/aibot/?from=https://tinygeeker.github.io/menu/aibot/" target="_blank" type="primary">国内版>></el-link></sub></h2>
    <el-row type="flex" justify="center" align="middle">
      <el-card shadow="hover" style="width: 80%; border-radius: 4px">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item name="1" align="left">
            <template #title>
              <el-icon><Operation /></el-icon> 常用网址
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">热门推荐：</el-link>
              <el-tooltip class="item" content="OpenAI旗下AI对话工具" placement="top-start">
                <el-link href="https://chat.openai.com/" target="_blank" type="danger">ChatGPT</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图像和插画生成工具" placement="top-start">
                <el-link href="https://www.midjourney.com/" target="_blank" type="danger">Midjourney</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="百度推出的基于文心大模型的AI对话互动工具" placement="top-start">
                <el-link href="https://yiyan.baidu.com/" target="_blank" type="primary">文心一言</el-link>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2" align="left">
            <template #title>
              <el-icon><ChatDotRound /></el-icon> 聊天翻译
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">对话聊天：</el-link>
              <el-tooltip class="item" content="OpenAI旗下AI对话工具" placement="top-start">
                <el-link href="https://chat.openai.com/" target="_blank" type="danger">ChatGPT</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="百度推出的基于文心大模型的AI对话互动工具" placement="top-start">
                <el-link href="https://yiyan.baidu.com/" target="_blank" type="danger">文心一言</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="科大讯飞推出的类ChatGPT的讯飞星火认知大模型" placement="top-start">
                <el-link href="https://xinghuo.xfyun.cn/" target="_blank" type="danger">讯飞星火</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里巴巴最新推出的类ChatGPT响应人类指令的大模型" placement="top-start">
                <el-link href="https://tongyi.aliyun.com/" target="_blank" type="danger">通义千问</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="360搜索最新推出的AI对话聊天机器人" placement="top-start">
                <el-link href="https://ai.360.cn/" target="_blank" type="danger">360智脑</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="昆仑万维与奇点智源联合研发的对标ChatGPT的大语言模型" placement="top-start">
                <el-link href="https://tiangong.kunlun.com/" target="_blank" type="danger">天工AI助手</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里达摩院推出的大小模型协同的智能助手，具备作诗、绘画、视频生成、语音播放等多模态能力" placement="top-start">
                <el-link href="https://www.modelscope.cn/studios/damo/ModelScopeGPT" target="_blank" type="danger">魔搭GPT</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="商汤科技推出的类ChatGPT的人工智能大语言模型" placement="top-start">
                <el-link href="https://chat.sensetime.com/wb/" target="_blank" type="primary">商量SenseChat</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="HuggingFace推出的在线聊天机器人，基于Open Assistant模型" placement="top-start">
                <el-link href="https://huggingface.co/chat/" target="_blank" type="primary">HuggingChat</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="复旦大学团队开发的对话式大型语言模型" placement="top-start">
                <el-link href="https://moss.fastnlp.top/" target="_blank" type="primary">MOSS</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="开源的、支持中英双语的1300亿参数的对话语言模型" placement="top-start">
                <el-link href="https://chatglm.cn/" target="_blank" type="primary">ChatGLM</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="创建虚拟角色并与其对话" placement="top-start">
                <el-link href="https://beta.character.ai/" target="_blank" type="primary">Character.AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Google推出的AI聊天对话机器人Bard" placement="top-start">
                <el-link href="https://bard.google.com/" target="_blank" type="primary">Google Bard</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="ChatGPT的最为有力的竞争对手之一" placement="top-start">
                <el-link href="https://claude.ai/" target="_blank" type="primary">Claude</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费版基于GPT-4的AI聊天机器人" placement="top-start">
                <el-link href="https://chat.forefront.ai/" target="_blank" type="primary">Forefront</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="虎博科技推出的AI对话聊天机器人，基于TigerBot开源大模型" placement="top-start">
                <el-link href="https://tigerbot.com/" target="_blank" type="primary">TigerBot</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Colossal-AI推出的免费开源版ChatGPT聊天机器人替代品" placement="top-start">
                <el-link href="https://chat.colossalai.org/" target="_blank" type="primary">ColossalChat</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Jasper针对内容创作者出品的AI聊天工具" placement="top-start">
                <el-link href="https://www.jasper.ai/chat" target="_blank" type="primary">Jasper Chat</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI搜索对话工具" placement="top-start">
                <el-link href="https://you.com/search?q=youchat&tbm=youchat&cfr=chatb" target="_blank" type="primary">YouChat AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI对话陪伴工具" placement="top-start">
                <el-link href="https://replika.ai/" target="_blank" type="primary">Replika</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费AI对话回应" placement="top-start">
                <el-link href="https://www.whispir.com/" target="_blank" type="primary">Whispr</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费开源的对话式AI，GitHub星标超3万" placement="top-start">
                <el-link href="https://open-assistant.io/" target="_blank" type="primary">Open Assistant</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="开发和创建AI虚拟角色并与其互动" placement="top-start">
                <el-link href="https://www.inworld.ai/" target="_blank" type="primary">Inworld</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="集成了AI问答的AI搜索引擎" placement="top-start">
                <el-link href="https://neeva.com/" target="_blank" type="primary">Neeva</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">语言翻译：</el-link>
              <el-tooltip class="item" content="准确的人工智能翻译工具" placement="top-start">
                <el-link href="https://www.deepl.com/translator" target="_blank" type="danger">DeepL翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片和视频翻译神器，支持多种语言的翻译" placement="top-start">
                <el-link href="https://www.xiangjifanyi.com/" target="_blank" type="danger">象寄翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="网易推出的AI智能翻译平台，支持音视频、文档、图片、字幕等翻译" placement="top-start">
                <el-link href="https://sight.youdao.com/" target="_blank" type="danger">网易见外</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里巴巴达摩院推出的多领域多语种的在线机器翻译" placement="top-start">
                <el-link href="https://translate.alibaba.com/" target="_blank" type="danger">阿里翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="字节跳动推出的智能翻译工具" placement="top-start">
                <el-link href="https://translate.volcengine.com/" target="_blank" type="danger">火山翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="微软必应推出的翻译工具" placement="top-start">
                <el-link href="https://www.bing.com/translator/" target="_blank" type="danger">必应翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Google免费提供的上百种语言智能翻译工具" placement="top-start">
                <el-link href="https://translate.google.com/" target="_blank" type="danger">Google翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="200种语言互译、沟通全世界！" placement="top-start">
                <el-link href="https://fanyi.baidu.com/" target="_blank" type="primary">百度翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="你免费的随身翻译" placement="top-start">
                <el-link href="https://fanyi.qq.com/" target="_blank" type="primary">腾讯翻译君</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="腾讯AI Lab推出的一款AI辅助翻译产品" placement="top-start">
                <el-link href="https://transmart.qq.com/" target="_blank" type="primary">TranSmart</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="科大讯飞推出的人工智能翻译平台" placement="top-start">
                <el-link href="https://fanyi.xfyun.cn/console/trans/doc" target="_blank" type="primary">讯飞智能翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="你的贴身智能翻译专家" placement="top-start">
                <el-link href="https://fanyi.sogou.com/" target="_blank" type="primary">搜狗翻译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="兼具中日英同声传译、文档翻译和网页翻译的智能翻译工具" placement="top-start">
                <el-link href="https://fanyi.caiyunapp.com/" target="_blank" type="primary">彩云小译</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="金山WPS推出的在线翻译平台" placement="top-start">
                <el-link href="https://kuaiyi.wps.cn/" target="_blank" type="primary">金山快译</el-link>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3" align="left">
            <template #title>
              <el-icon><Picture /></el-icon> 图像相关
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">图片生成：</el-link>
              <el-tooltip class="item" content="AI图像和插画生成工具" placement="top-start">
                <el-link href="https://www.midjourney.com/" target="_blank" type="danger">Midjourney</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="StabilityAI推出的文本到图像生成AI" placement="top-start">
                <el-link href="https://stablediffusionweb.com/" target="_blank" type="danger">Stable Diffusion</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI艺术和创意辅助平台" placement="top-start">
                <el-link href="https://yige.baidu.com/" target="_blank" type="danger">文心一格</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="创客贴推出的AI艺术画生成工具" placement="top-start">
                <el-link href="https://aiart.chuangkit.com/" target="_blank" type="primary">创客贴AI画匠</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI一下，妙笔生画" placement="top-start">
                <el-link href="https://www.printidea.art/" target="_blank" type="primary">造梦日记</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="美图推出的AI文本生成图片的工具" placement="top-start">
                <el-link href="https://account.meitu.com/" target="_blank" type="primary">美图AI文生图</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="美图最新推出的AI图片和绘画创作生成平台" placement="top-start">
                <el-link href="https://www.whee.com/" target="_blank" type="primary">WHEE</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里旗下堆友推出的多风格AI绘画生成器" placement="top-start">
                <el-link href="https://d.design/ai" target="_blank" type="primary">堆友AI反应堆</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里最新推出的AI绘画创作模型" placement="top-start">
                <el-link href="https://wanxiang.aliyun.com/" target="_blank" type="primary">通义万象</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="面包多团队推出的从文本描述生成绘画艺术作品" placement="top-start">
                <el-link href="https://6pen.art/" target="_blank" type="primary">6pen Art</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="微软必应推出的基于DALL·E的AI图像生成工具" placement="top-start">
                <el-link href="https://cn.bing.com/create" target="_blank" type="primary">Bing Image Creator</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Adobe最新推出的AI图片生成工具" placement="top-start">
                <el-link href="https://www.adobe.com/sensei/generative-ai/firefly.html" target="_blank" type="primary">Adobe Firefly</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="人工智能AI作画网站" placement="top-start">
                <el-link href="https://creator.nolibox.com/" target="_blank" type="primary">画宇宙</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Freepik最新推出的AI图片生成工具" placement="top-start">
                <el-link href="https://www.freepik.com/ai/image-generator" target="_blank" type="primary">Freepik AI Image Generator</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="在线设计工具Canva推出的AI图像生成工具" placement="top-start">
                <el-link href="https://www.canva.com/newsroom/news/text-to-image-ai-image-generator/" target="_blank" type="primary">Canva AI图像生成</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI生成各种类型的图像和插画" placement="top-start">
                <el-link href="https://stockimg.ai/" target="_blank" type="primary">Stockimg AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="StabilityAI最新推出的将手绘草图转换成精美图像的工具" placement="top-start">
                <el-link href="https://clipdrop.co/stable-doodle" target="_blank" type="primary">Stable Doodle</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费的AI插画绘制工具，由昆仑万维与奇点智源合作推出" placement="top-start">
                <el-link href="https://sky-paint.singularity-ai.com/" target="_blank" type="primary">天工巧绘SkyPaint</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片生成和美术创作工具箱" placement="top-start">
                <el-link href="https://xingzheai.cn/" target="_blank" type="primary">行者AI美术</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI生成和合成360°全景图像插画" placement="top-start">
                <el-link href="https://skybox.blockadelabs.com/" target="_blank" type="primary">Skybox AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="智源研究院推出的AI文本图像绘画生成工具" placement="top-start">
                <el-link href="https://flagstudio.baai.ac.cn/" target="_blank" type="primary">FlagStudio</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI艺术插画在线生成" placement="top-start">
                <el-link href="https://nightcafe.studio/" target="_blank" type="primary">NightCafe</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="魔法般的二次元绘画生成" placement="top-start">
                <el-link href="https://nijijourney.com/" target="_blank" type="primary">niji.journey</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI创建生成梦幻般的插画图片，刻画你的梦中场景" placement="top-start">
                <el-link href="https://deepdreamgenerator.com/" target="_blank" type="primary">Deep Dream Generator</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="千库网推出的AI图片插画生成工具" placement="top-start">
                <el-link href="https://588ku.com/ai/wuxianhua/" target="_blank" type="primary">无限画</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费的AI图像艺术画生成工具" placement="top-start">
                <el-link href="https://www.bluewillow.ai/" target="_blank" type="primary">BlueWillow</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费在线AI生成二次元动漫头像" placement="top-start">
                <el-link href="https://waifulabs.com/" target="_blank" type="primary">Waifu Labs</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费在线插画生成工具" placement="top-start">
                <el-link href="https://dreamlike.art/" target="_blank" type="primary">dreamlike.art</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="创建令人惊叹的插画和艺术" placement="top-start">
                <el-link href="https://www.artbreeder.com/" target="_blank" type="primary">Artbreeder</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="国内团队推出的AI艺术画生成工具" placement="top-start">
                <el-link href="https://www.tiamat.world/" target="_blank" type="primary">Tiamat</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="在线免费AI插画创作平台，支持文生图，图生图，条件生图等多种绘画模式" placement="top-start">
                <el-link href="https://rightbrain.art/" target="_blank" type="primary">Vega AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Freepik推出的AI文本到图像的在线生成工具" placement="top-start">
                <el-link href="https://wepik.com/ai" target="_blank" type="primary">Wepik AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费在线文本到图像生成" placement="top-start">
                <el-link href="https://www.craiyon.com/" target="_blank" type="primary">Craiyon</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="万兴科技推出的AI生成高品质艺术画工具" placement="top-start">
                <el-link href="https://aigc.wondershare.cn/" target="_blank" type="primary">万兴爱画</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Writesonic推出的AI艺术插画生成工具" placement="top-start">
                <el-link href="https://writesonic.com/photosonic-ai-art-generator" target="_blank" type="primary">Photosonic</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="可定制的人工智能图像生成" placement="top-start">
                <el-link href="https://www.astria.ai/" target="_blank" type="primary">Astria</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="在线AI图像和插画创作工具" placement="top-start">
                <el-link href="https://getimg.ai/" target="_blank" type="primary">getimg.ai</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="DeviantArt推出的AI插画生成工具" placement="top-start">
                <el-link href="https://www.dreamup.com/" target="_blank" type="primary">DreamUp</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="将草图转变为精美的插画" placement="top-start">
                <el-link href="https://scribblediffusion.com/" target="_blank" type="primary">Scribble Diffusion</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="基于Stable Diffusion的在线插画生成" placement="top-start">
                <el-link href="https://lexica.art/" target="_blank" type="primary">Lexica</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI人脸头像生成工具" placement="top-start">
                <el-link href="https://generated.photos/" target="_blank" type="primary">Generated Photos</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Picsart推出的AI图片生成器" placement="top-start">
                <el-link href="https://picsart.com/ai-image-generator" target="_blank" type="primary">Picsart AI</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">背景移除：</el-link>
              <el-tooltip class="item" content="稿定设计推出的AI自动消除背景工具" placement="top-start">
                <el-link href="https://www.gaoding.com/koutu" target="_blank" type="danger">稿定抠图</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="在线一键抠图换背景" placement="top-start">
                <el-link href="https://www.yijiankoutu.com/" target="_blank" type="danger">一键抠图</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="美图秀秀推出的AI智能抠图工具，一键移除背景" placement="top-start">
                <el-link href="https://cutout.meitu.com/" target="_blank" type="danger">美图抠图</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Icons8出品的免费图片背景移除工具" placement="top-start">
                <el-link href="https://icons8.com/bgremover" target="_blank" type="danger">Icons8 Background Remover</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="ClipDrop出品的AI图片背景移除工具" placement="top-start">
                <el-link href="https://clipdrop.co/remove-background" target="_blank" type="primary">ClipDrop Remove Background</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="在线抠图和去除图片背景" placement="top-start">
                <el-link href="https://www.erase.bg/" target="_blank" type="primary">Erase.bg</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费的保护隐私的AI图片背景去除工具" placement="top-start">
                <el-link href="https://bgsub.cn/" target="_blank" type="primary">BgSub</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Icons8推出的智能图片背景移除和无损放大二合一Mac应用" placement="top-start">
                <el-link href="https://icons8.com/goprod" target="_blank" type="primary">GoProd</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Adobe Express的图片背景移除工具" placement="top-start">
                <el-link href="https://www.adobe.com/express/feature/image/remove-background" target="_blank" type="primary">Adobe Image Background Remover</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片背景移除工具" placement="top-start">
                <el-link href="https://removal.ai/" target="_blank" type="primary">Removal.AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI自动删除图片背景" placement="top-start">
                <el-link href="https://magicstudio.com/zh/backgrounderaser/" target="_blank" type="primary">Background Eraser</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费在线抠除图片背景" placement="top-start">
                <el-link href="https://www.slazzer.com/" target="_blank" type="primary">Slazzer</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI批量抠图去背景" placement="top-start">
                <el-link href="https://www.cutout.pro/zh-cn/remove-background" target="_blank" type="primary">Cutout.Pro抠图</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Vance AI推出的图片背景移除工具" placement="top-start">
                <el-link href="https://bgremover.vanceai.com/" target="_blank" type="primary">BGremover</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="强大的AI背景移除工具" placement="top-start">
                <el-link href="https://www.remove.bg/" target="_blank" type="primary">Remove.bg</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Picsart旗下的Quicktools推出的图片背景移除工具" placement="top-start">
                <el-link href="https://tools.picsart.com/image/background-remover/" target="_blank" type="primary">Quicktools Background Remover</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Zyro推出的AI图片背景移除工具" placement="top-start">
                <el-link href="https://zyro.com/tools/image-background-remover" target="_blank" type="primary">Zyro AI Background Remover</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费自动图片背景去除" placement="top-start">
                <el-link href="https://photoscissors.com/" target="_blank" type="primary">PhotoScissors</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="魔术般地去除图片背景" placement="top-start">
              <el-link href="https://clippingmagic.com/" target="_blank" type="primary">ClippingMagic</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片和视频抠图，一键抠图神器" placement="top-start">
                <el-link href="https://www.picup.shop/" target="_blank" type="primary">皮卡智能</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Hotpot.ai推出的图片背景移除工具" placement="top-start">
                <el-link href="https://hotpot.ai/remove-background" target="_blank" type="primary">Hotpot AI Background Remover</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI产品图背景替换" placement="top-start">
                <el-link href="https://www.stylized.ai/" target="_blank" type="primary">Stylized</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI产品图精美背景添加" placement="top-start">
                <el-link href="https://pebblely.com/" target="_blank" type="primary">Pebblely</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI产品图添加背景" placement="top-start">
                <el-link href="https://mokker.ai/" target="_blank" type="primary">Mokker AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="高质量AI产品展示效果图生成" placement="top-start">
                <el-link href="https://www.booth.ai/" target="_blank" type="primary">Booth.ai</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI产品背景移除和替换" placement="top-start">
                <el-link href="https://www.pixelcut.ai/" target="_blank" type="primary">Pixelcut.ai</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片编辑和背景移除" placement="top-start">
                <el-link href="https://picwish.com/" target="_blank" type="primary">PicWish</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费的AI图片背景移除和添加" placement="top-start">
                <el-link href="https://www.photoroom.com/background-remover" target="_blank" type="primary">PhotoRoom</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">无损放大：</el-link>
              <el-tooltip class="item" content="Icons8推出的智能图片背景移除和无损放大二合一Mac应用" placement="top-start">
                <el-link href="https://icons8.com/goprod" target="_blank" type="danger">GoProd</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费开源的AI图片无损放大工具" placement="top-start">
                <el-link href="https://www.upscayl.org/" target="_blank" type="danger">Upscayl</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费的在线图片无损放大工具" placement="top-start">
                <el-link href="https://bigjpg.com/" target="_blank" type="danger">BigJPG</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI在线免费放大图片并保持图像质量" placement="top-start">
                <el-link href="https://letsenhance.io/" target="_blank" type="primary">Let's Enhance</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Icons8出品的AI图片无损放大工具" placement="top-start">
                <el-link href="https://icons8.com/upscaler" target="_blank" type="primary">Icons8 Smart Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="ClipDrop出品的AI图片放大工具" placement="top-start">
                <el-link href="https://clipdrop.co/image-upscaler" target="_blank" type="primary">ClipDrop Image Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费的AI图片放大工具" placement="top-start">
                <el-link href="https://imgupscaler.com/" target="_blank" type="primary">Img.Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Fotor推出的AI图片放大工具" placement="top-start">
                <el-link href="https://www.fotor.com/image-upscaler/" target="_blank" type="primary">Fotor AI Image Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Zyro出品的人工智能图片放大工具" placement="top-start">
                <el-link href="https://zyro.com/tools/image-upscaler" target="_blank" type="primary">Zyro AI Image Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Media.io推出的AI图片放大工具" placement="top-start">
                <el-link href="https://www.media.io/image-upscaler.html" target="_blank" type="primary">Media.io AI Image Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片放大和分辨率修改" placement="top-start">
                <el-link href="https://www.upscale.media/" target="_blank" type="primary">Upscale.media</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI免费图片无损放大" placement="top-start">
                <el-link href="https://ai.nero.com/image-upscaler" target="_blank" type="primary">Nero Image Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="VanceAI推出的在线图片尺寸调整工具" placement="top-start">
                <el-link href="https://vanceai.com/image-resizer/" target="_blank" type="primary">VanceAI Image Resizer</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="PhotoAid出品的免费在线人工智能图片放大工具" placement="top-start">
                <el-link href="https://photoaid.com/en/tools/ai-image-enlarger" target="_blank" type="primary">PhotoAid Image Upscaler</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="在线图片放大工具" placement="top-start">
                <el-link href="https://upscalepics.com/" target="_blank" type="primary">Upscalepics</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI无损放大图片" placement="top-start">
                <el-link href="https://magicstudio.com/zh/enlarger/" target="_blank" type="primary">Image Enlarger</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI智能调整图片尺寸用于社交媒体平台发帖" placement="top-start">
                <el-link href="https://pixelhunter.io/" target="_blank" type="primary">Pixelhunter</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">画质修复：</el-link>
              <el-tooltip class="item" content="美图秀秀推出的一站式AI智能修图软件" placement="top-start">
                <el-link href="https://yunxiu.meitu.com/" target="_blank" type="danger">美图云修</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="人工智能老照片上色和修复" placement="top-start">
                <el-link href="https://jpghd.com/" target="_blank" type="danger">jpgDD</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Cutout.Pro推出的黑白图片上色" placement="top-start">
                <el-link href="https://www.cutout.pro/zh-CN/photo-colorizer-black-and-white" target="_blank" type="danger">Cutout.Pro老照片上色</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI老照片修复" placement="top-start">
                <el-link href="https://www.restorephotos.io/" target="_blank" type="primary">Restorephotos.io</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片调色上色" placement="top-start">
                <el-link href="https://palette.fm/" target="_blank" type="primary">Palette</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="ClipDrop推出的AI图像打光工具" placement="top-start">
                <el-link href="https://clipdrop.co/relight" target="_blank" type="primary">Relight</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片修图和优化工具" placement="top-start">
                <el-link href="https://facet.ai/" target="_blank" type="primary">Facet</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI图片生成和修图" placement="top-start">
                <el-link href="https://playgroundai.com/" target="_blank" type="primary">Playground AI</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">物体抹除：</el-link>
              <el-tooltip class="item" content="在线抹除图片中不想要的物体" placement="top-start">
                <el-link href="https://www.hama.app/" target="_blank" type="danger">HaMa</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="图片物体抹除和清理" placement="top-start">
                <el-link href="https://bgeraser.com/" target="_blank" type="primary">Bg Eraser</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI移除图片中的任何物体" placement="top-start">
                <el-link href="https://snapedit.app/" target="_blank" type="primary">SnapEdit</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="智能移除图片中的物体、文本、污迹、人物或任何不想要的东西" placement="top-start">
                <el-link href="https://cleanup.pictures/" target="_blank" type="primary">Cleanup.pictures</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Cutout.Pro推出的AI图片物体涂抹去除工具" placement="top-start">
                <el-link href="https://www.cutout.pro/zh-CN/image-retouch-remove-unwanted-objects" target="_blank" type="primary">Cutout.Pro Retouch</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI移除图片中不想要的物体" placement="top-start">
                <el-link href="https://magicstudio.com/zh/magiceraser/" target="_blank" type="primary">Magic Eraser</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI智能删除照片中的水印" placement="top-start">
                <el-link href="https://www.watermarkremover.io/" target="_blank" type="primary">WatermarkRemover</el-link>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item name="4" align="left">
            <template #title>
              <el-icon><Headset /></el-icon> 音频视频
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">音频相关：</el-link>
              <el-tooltip class="item" content="网易推出的一站式AI音乐创作工具" placement="top-start">
                <el-link href="https://tianyin.music.163.com/" target="_blank" type="danger">网易天音</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="科大讯飞推出的AI转语音和配音工具" placement="top-start">
                <el-link href="https://peiyin.xunfei.cn/" target="_blank" type="danger">讯飞智作</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="网易云音乐与小冰智能联合推出的免费AI歌手音乐创作软件" placement="top-start">
                <el-link href="https://xstudio.music.163.com/" target="_blank" type="danger">网易云音乐·X Studio</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI在线将语音转换成文字" placement="top-start">
                <el-link href="https://www.notta.ai/en/home" target="_blank" type="danger">Notta</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="IBM Watson文字转语音" placement="top-start">
                <el-link href="https://www.ibm.com/products/text-to-speech" target="_blank" type="danger">IBM Watson文字转语音</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Deep Fake文本转语音" placement="top-start">
                <el-link href="https://fakeyou.com/" target="_blank" type="danger">FakeYou</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="短视频/有声书AI配音平台，由出门问问推出" placement="top-start">
                <el-link href="https://www.moyin.com/" target="_blank" type="danger">魔音工坊</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="灵动音科技推出的AI智能生成BGM音乐" placement="top-start">
                <el-link href="https://bgmcat.com/" target="_blank" type="primary">BGM猫</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI智能在线配音语音合成工具" placement="top-start">
                <el-link href="https://yueyin.zhipianbang.com/" target="_blank" type="primary">悦音配音</el-link>
              </el-tooltip>
                <el-tooltip class="item" content="AI BGM背景音乐生成工具" placement="top-start">
                <el-link href="https://mubert.com/" target="_blank" type="primary">Mubert</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里推出的AI会议转录工具，万语千言，心领神悟" placement="top-start">
                <el-link href="https://tingwu.aliyun.com/" target="_blank" type="primary">通义听悟</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI噪音消除工具" placement="top-start">
                <el-link href="https://krisp.ai/" target="_blank" type="primary">Krisp</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="超真实在线AI语音生成" placement="top-start">
                <el-link href="https://play.ht/" target="_blank" type="primary">Play.ht</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI音乐生成工具" placement="top-start">
                <el-link href="https://soundraw.io/" target="_blank" type="primary">Soundraw</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Clipchamp的文字转语音生成器" placement="top-start">
                <el-link href="https://clipchamp.com/zh-hans/features/ai-voice-over-generator/" target="_blank" type="primary">Clipchamp AI旁白生成器</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">视频相关：</el-link>
              <el-tooltip class="item" content="百度官方出品的AIGC创作平台" placement="top-start">
                <el-link href="https://aigc.baidu.com/" target="_blank" type="danger">度加创作工具</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="简单好用的AI智能视频创作平台" placement="top-start">
                <el-link href="https://aigc.yizhentv.com/" target="_blank" type="danger">一帧秒创</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="强大的AI视频制作工具，绿幕抠像、视频合成等" placement="top-start">
                <el-link href="https://runwayml.com/green-screen/" target="_blank" type="danger">Runway</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI真人口播视频生成工具" placement="top-start">
                <el-link href="https://www.d-id.com/" target="_blank" type="danger">D-ID</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="腾讯推出的在线智能视频创作平台" placement="top-start">
                <el-link href="https://zenvideo.qq.com/" target="_blank" type="primary">腾讯智影</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="360旗下的AI视频剪辑工具，AI成片、AI数字人、智能添加字幕、去水印等" placement="top-start">
                <el-link href="https://www.kuaijianji.com/" target="_blank" type="primary">快剪辑</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="动画和数字人智能生成平台" placement="top-start">
                <el-link href="https://www.laihua.com/" target="_blank" type="primary">来画</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="万兴科技推出的AI数字人口播视频营销工具" placement="top-start">
                <el-link href="https://virbo.wondershare.cn/" target="_blank" type="primary">万兴播报</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI数字人视频生成平台，由出门问问推出" placement="top-start">
                <el-link href="https://weta365.com/conduct" target="_blank" type="primary">奇妙元</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="一键智能在线自动为视频加字幕" placement="top-start">
                <el-link href="https://huiyingzimu.com/" target="_blank" type="primary">绘影字幕</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI智能自动生成动画短视频" placement="top-start">
                <el-link href="https://www.animiz.cn/microvideo/" target="_blank" type="primary">万彩微影</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI将博客文章转换成视频" placement="top-start">
                <el-link href="https://lumen5.com/" target="_blank" type="primary">Lumen5</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="让图片动起来的AI工具" placement="top-start">
                <el-link href="https://dreamfaceapp.com/" target="_blank" type="primary">DreamFace</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Veed推出的AI视频背景移除工具" placement="top-start">
                <el-link href="https://www.veed.io/zh-CN/tools/video-background-remover" target="_blank" type="primary">Veed Video Background Remover</el-link>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item name="5" align="left">
            <template #title>
              <el-icon><Guide /></el-icon> 编程设计
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">编程工具：</el-link>
              <el-tooltip class="item" content="GitHub AI编程工具" placement="top-start">
                <el-link href="https://github.com/features/copilot" target="_blank" type="danger">GitHub Copilot</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="亚马逊最新发布的免费AI编程助手" placement="top-start">
                <el-link href="https://aws.amazon.com/cn/codewhisperer/" target="_blank" type="danger">CodeWhisperer</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="黑箱AI编程助理，快速代码生成" placement="top-start">
                <el-link href="https://www.useblackbox.io/" target="_blank" type="primary">BLACKBOX AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI代码生成和补全" placement="top-start">
                <el-link href="https://codeium.com/" target="_blank" type="primary">Codeium</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI代码测试工具" placement="top-start">
                <el-link href="https://www.codium.ai/" target="_blank" type="primary">CodiumAI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI Debug调试助手" placement="top-start">
                <el-link href="https://jam.dev/jamgpt" target="_blank" type="primary">JamGPT</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI SQL语句生成和修改" placement="top-start">
                <el-link href="https://www.airops.com/" target="_blank" type="primary">AirOps</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里推出的免费设计稿智能生成前端代码" placement="top-start">
                <el-link href="https://www.imgcook.com/" target="_blank" type="primary">Imgcook</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">设计工具：</el-link>
              <el-tooltip class="item" content="一站式AI创意工具集合，AI绘图、场景生成，商品合成" placement="top-start">
                <el-link href="https://www.gaoding.com/ai" target="_blank" type="danger">稿定AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="即时设计推出的由文本描述生成可编辑的原型设计稿" placement="top-start">
                <el-link href="https://js.design/ai" target="_blank" type="danger">即时AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="美图推出的AI海报设计工具，一键生成海报宣传图" placement="top-start">
                <el-link href="https://design.meitu.com/poster/" target="_blank" type="primary">美图设计室</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="腾讯推出的智能设计平台，让内容更精彩" placement="top-start">
                <el-link href="https://taishan.qq.com/brand/" target="_blank" type="primary">智绘设计</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="阿里推出的智能设计商品图和海报的平台" placement="top-start">
                <el-link href="https://luban.aliyun.com/" target="_blank" type="primary">鹿班</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="京东推出的商品图智能设计小工具" placement="top-start">
                <el-link href="https://ling.jd.com/" target="_blank" type="primary">羚珑</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="墨刀推出的AI产品原型设计助手" placement="top-start">
                <el-link href="https://modao.cc/" target="_blank" type="primary">墨刀AI</el-link>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item name="6" align="left">
            <template #title>
              <el-icon><Medal /></el-icon> 办公学习
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">办公工具：</el-link>
              <el-tooltip class="item" content="AI快速生成高质量PPT" placement="top-start">
                <el-link href="https://ppt.isheji.com/" target="_blank" type="danger">爱设计PPT</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="美图秀秀推出的免费在线AI生成PPT设计工具" placement="top-start">
                <el-link href="https://design.meitu.com/" target="_blank" type="danger">美图AI PPT</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="北大团队开发的通过聊天来操作Excel表格的AI工具" placement="top-start">
                <el-link href="https://chatexcel.com/" target="_blank" type="primary">酷表ChatExcel</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="一站式智能Office内容创作平台" placement="top-start">
                <el-link href="https://getgetai.com/" target="_blank" type="primary">字语智能</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="亿图脑图AI思维导图助手" placement="top-start">
                <el-link href="https://www.edrawsoft.cn/mindmaster/" target="_blank" type="primary">亿图脑图</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="印象AI加持的在线思维导图工具" placement="top-start">
                <el-link href="https://static.app.yinxiang.com/evermind/" target="_blank" type="primary">印象图记</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="飞书智能会议纪要和快捷语音识别转文字" placement="top-start">
                <el-link href="https://www.feishu.cn/product/minutes" target="_blank" type="primary">飞书妙记</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="科大讯飞推出的AI智能会议系统，实时字幕、实时翻译、自动生成会议记录" placement="top-start">
                <el-link href="https://meeting.iflyrec.com/" target="_blank" type="primary">讯飞听见</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="思必驰推出的AI会议助手，语音转文字、字幕同传、AI摘要" placement="top-start">
                <el-link href="https://work.duiopen.com/" target="_blank" type="primary">麦耳会记</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="智能简历制作软件，基于GPT的简历优化和简历代写" placement="top-start">
                <el-link href="https://www.52cv.com/" target="_blank" type="primary">职徒简历</el-link>
              </el-tooltip>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">提示指令：</el-link>
              <el-tooltip class="item" content="免费高质量提示词社区，1000+可视化提示词工具" placement="top-start">
                <el-link href="https://175ai.cn/" target="_blank" type="danger">一起玩AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="ChatGPT指令大全" placement="top-start">
                <el-link href="https://flowgpt.com/" target="_blank" type="danger">FlowGPT</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI绘画提示词分享平台" placement="top-start">
                <el-link href="https://www.ai016.com/" target="_blank" type="danger">绘AI</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费开源的提示工程指南，GitHub标星超3万" placement="top-start">
                <el-link href="https://www.promptingguide.ai/" target="_blank" type="danger">提示工程指南</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="发现Stable Diffusion、ChatGPT和Midjourney的提示用语" placement="top-start">
                <el-link href="https://prompthero.com/" target="_blank" type="primary">PromptHero</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AIGC精品提示词库" placement="top-start">
                <el-link href="https://icihun.com/" target="_blank" type="primary">词魂</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="专为 Prompt 编写者设计的工具" placement="top-start">
                <el-link href="https://www.clickprompt.org/" target="_blank" type="primary">ClickPrompt</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="超过7480个基于DALL·E 2的图片生成指令语句" placement="top-start">
                <el-link href="https://generrated.com/" target="_blank" type="primary">Generrated</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="探索最新的ChatGPT语义提示词" placement="top-start">
                <el-link href="https://snackprompt.com/" target="_blank" type="primary">Snack Prompt</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="免费高质量的Prompts集合" placement="top-start">
                <el-link href="https://publicprompts.art/" target="_blank" type="primary">PublicPrompts</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="主要针对于SEO和SaaS文案写作的ChatGPT Prompts浏览器扩展" placement="top-start">
                <el-link href="https://www.aiprm.com/" target="_blank" type="primary">AIPRM</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="Midjourney Prompt帮助工具" placement="top-start">
                <el-link href="https://prompt.noonshot.com/" target="_blank" type="primary">MJ Prompt Tool</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="可视化AI提示语选择和搭建" placement="top-start">
                <el-link href="https://tools.saxifrage.xyz/prompt" target="_blank" type="primary">Visual Prompt Builder</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="AI Prompts集合市场" placement="top-start">
                <el-link href="https://promptbase.com/" target="_blank" type="primary">PromptBase</el-link>
              </el-tooltip>
              <el-tooltip class="item" content="开源的简单易用的ChatGPT快捷指令，让生产力加倍！" placement="top-start">
                <el-link href="https://www.aishort.top/" target="_blank" type="primary">ChatGPT Shortcut</el-link>
              </el-tooltip>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SiteMap",
  data() {
    return {
      activeNames: ["1"]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-collapse-item__header {
  font-size: 15px !important;
  font-weight: bold !important;
}

.el-collapse {
  border-top: 0 !important;
}

.el-link__inner {
  margin: 1vh;
}

.el-icon {
  margin-right: 1vh;
}
</style>
