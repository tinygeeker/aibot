<template>
  <div>
    <h2>极客飞兔 AI工具集</h2>
    <el-row type="flex" justify="center" align="middle">
      <el-card shadow="hover" style="width: 80%; border-radius: 4px">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item name="1" align="left">
            <template #title>
              <el-icon><Operation /></el-icon> 常用网址
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">热门推荐：</el-link>
              <el-link href="https://chat.openai.com/" target="_blank" type="danger">ChatGPT</el-link>
              <el-link href="https://www.midjourney.com/" target="_blank" type="danger">Midjourney</el-link>
              <el-link href="https://yiyan.baidu.com/" target="_blank" type="primary">文心一言</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">飞兔主页：</el-link>
              <el-link href="https://juejin.cn/user/2467756640574845" target="_blank" type="warning">掘金</el-link>
              <el-link href="https://tinygeeker.blog.csdn.net/" target="_blank" type="warning">CSDN</el-link>
              <el-link href="https://www.cnblogs.com/tinygeeker/" target="_blank" type="warning">博客园</el-link>
              <el-link href="https://blog.51cto.com/tinygeeker" target="_blank" type="warning">51CTO</el-link>
              <el-link href="https://developer.aliyun.com/profile/expert/oirrcfhlzqzko" target="_blank" type="warning">阿里云社区</el-link>
              <el-link href="https://bbs.huaweicloud.com/community/usersnew/id_1677736481816497" target="_blank" type="warning">华为云社区</el-link>
              <el-link href="https://cloud.tencent.com/developer/user/8345747" target="_blank" type="warning">腾讯云社区</el-link>
              <el-link href="https://www.infoq.cn/u/tinygeeker/publish" target="_blank" type="warning">InfoQ</el-link>
              <el-link href="https://segmentfault.com/u/tinygeeker" target="_blank" type="warning">思否</el-link>
              <el-link href="https://developer.huawei.com/consumer/cn/forum/" target="_blank" type="warning">华为开发者论坛</el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2" align="left">
            <template #title>
              <el-icon><ChatDotRound /></el-icon> 聊天翻译
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">对话聊天：</el-link>
              <el-link href="https://chat.openai.com/" target="_blank" type="danger">ChatGPT</el-link>
              <el-link href="https://yiyan.baidu.com/" target="_blank" type="danger">文心一言</el-link>
              <el-link href="https://xinghuo.xfyun.cn/" target="_blank" type="danger">讯飞星火</el-link>
              <el-link href="https://tongyi.aliyun.com/" target="_blank" type="danger">通义千问</el-link>
              <el-link href="https://ai.360.cn/" target="_blank" type="danger">360智脑</el-link>
              <el-link href="https://tiangong.kunlun.com/" target="_blank" type="danger">天宫AI助手</el-link>
              <el-link href="https://www.modelscope.cn/studios/damo/ModelScopeGPT" target="_blank" type="danger">魔塔GPT</el-link>
              <el-link href="https://moss.fastnlp.top/" target="_blank" type="primary">MOSS</el-link>
              <el-link href="https://huggingface.co/chat/" target="_blank" type="primary">HuggingChat</el-link>
              <el-link href="https://chatglm.cn/" target="_blank" type="primary">ChatGLM</el-link>
              <el-link href="https://beta.character.ai/" target="_blank" type="primary">Character.AI</el-link>
              <el-link href="https://bard.google.com/" target="_blank" type="primary">Google Bard</el-link>
              <el-link href="https://claude.ai/" target="_blank" type="primary">Claude</el-link>
              <el-link href="https://chat.forefront.ai/" target="_blank" type="primary">Forefront</el-link>
              <el-link href="https://tigerbot.com/" target="_blank" type="primary">TigerBot</el-link>
              <el-link href="https://chat.colossalai.org/" target="_blank" type="primary">ColossalChat</el-link>
              <el-link href="https://www.jasper.ai/chat" target="_blank" type="primary">Jasper Chat</el-link>
              <el-link href="https://you.com/search?q=youchat&tbm=youchat&cfr=chatb" target="_blank" type="primary">YouChat AI</el-link>
              <el-link href="https://replika.ai/" target="_blank" type="primary">Replika</el-link>
              <el-link href="https://www.whispir.com/" target="_blank" type="primary">Whispr</el-link>
              <el-link href="https://open-assistant.io/" target="_blank" type="primary">Open Assistant</el-link>
              <el-link href="https://www.inworld.ai/" target="_blank" type="primary">Inworld</el-link>
              <el-link href="https://neeva.com/" target="_blank" type="primary">Neeva</el-link>
              <el-link href="https://chat.sensetime.com/wb/" target="_blank" type="primary">SenseChat</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">语言翻译：</el-link>
              <el-link href="https://www.deepl.com/translator" target="_blank" type="danger">DeepL翻译</el-link>
              <el-link href="https://www.xiangjifanyi.com/" target="_blank" type="danger">象寄翻译</el-link>
              <el-link href="https://sight.youdao.com/" target="_blank" type="danger">网易见外</el-link>
              <el-link href="https://translate.alibaba.com/" target="_blank" type="danger">阿里翻译</el-link>
              <el-link href="https://translate.volcengine.com/" target="_blank" type="danger">火山翻译</el-link>
              <el-link href="https://www.bing.com/translator/" target="_blank" type="danger">必应翻译</el-link>
              <el-link href="https://translate.google.com/" target="_blank" type="danger">Google翻译</el-link>
              <el-link href="https://fanyi.baidu.com/" target="_blank" type="primary">百度翻译</el-link>
              <el-link href="https://fanyi.qq.com/" target="_blank" type="primary">腾讯翻译君</el-link>
              <el-link href="https://transmart.qq.com/" target="_blank" type="primary">TranSmart</el-link>
              <el-link href="https://fanyi.xfyun.cn/console/trans/doc" target="_blank" type="primary">讯飞智能翻译</el-link>
              <el-link href="https://fanyi.sogou.com/" target="_blank" type="primary">搜狗翻译</el-link>
              <el-link href="https://fanyi.caiyunapp.com/" target="_blank" type="primary">彩云小译</el-link>
              <el-link href="https://kuaiyi.wps.cn/" target="_blank" type="primary">金山快译</el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3" align="left">
            <template #title>
              <el-icon><Picture /></el-icon> 图像相关
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">图片生成：</el-link>
              <el-link href="https://www.midjourney.com/" target="_blank" type="danger">Midjourney</el-link>
              <el-link href="https://stablediffusionweb.com/" target="_blank" type="danger">Stable Diffusion</el-link>
              <el-link href="https://yige.baidu.com/" target="_blank" type="danger">文心一格</el-link>
              <el-link href="https://aiart.chuangkit.com/" target="_blank" type="primary">创客贴AI画匠</el-link>
              <el-link href="https://www.printidea.art/" target="_blank" type="primary">造梦日记</el-link>
              <el-link href="https://account.meitu.com/" target="_blank" type="primary">美图AI文生图</el-link>
              <el-link href="https://www.whee.com/" target="_blank" type="primary">WHEE</el-link>
              <el-link href="https://d.design/ai" target="_blank" type="primary">堆友AI反应堆</el-link>
              <el-link href="https://wanxiang.aliyun.com/" target="_blank" type="primary">通义万象</el-link>
              <el-link href="https://6pen.art/" target="_blank" type="primary">6pen Art</el-link>
              <el-link href="https://cn.bing.com/create" target="_blank" type="primary">Bing Image Creator</el-link>
              <el-link href="https://www.adobe.com/sensei/generative-ai/firefly.html" target="_blank" type="primary">Adobe Firefly</el-link>
              <el-link href="https://creator.nolibox.com/" target="_blank" type="primary">画宇宙</el-link>
              <el-link href="https://www.freepik.com/ai/image-generator" target="_blank" type="primary">Freepik AI Image Generator</el-link>
              <el-link href="https://www.canva.com/newsroom/news/text-to-image-ai-image-generator/" target="_blank" type="primary">Canva AI图像生成</el-link>
              <el-link href="https://stockimg.ai/" target="_blank" type="primary">Stockimg AI</el-link>
              <el-link href="https://clipdrop.co/stable-doodle" target="_blank" type="primary">Stable Doodle</el-link>
              <el-link href="https://sky-paint.singularity-ai.com/" target="_blank" type="primary">天工巧绘SkyPaint</el-link>
              <el-link href="https://xingzheai.cn/" target="_blank" type="primary">行者AI美术</el-link>
              <el-link href="https://skybox.blockadelabs.com/" target="_blank" type="primary">Skybox AI</el-link>
              <el-link href="https://flagstudio.baai.ac.cn/" target="_blank" type="primary">FlagStudio</el-link>
              <el-link href="https://nightcafe.studio/" target="_blank" type="primary">NightCafe</el-link>
              <el-link href="https://nijijourney.com/" target="_blank" type="primary">niji.journey</el-link>
              <el-link href="https://deepdreamgenerator.com/" target="_blank" type="primary">Deep Dream Generator</el-link>
              <el-link href="https://588ku.com/ai/wuxianhua/" target="_blank" type="primary">无限画</el-link>
              <el-link href="https://www.bluewillow.ai/" target="_blank" type="primary">BlueWillow</el-link>
              <el-link href="https://waifulabs.com/" target="_blank" type="primary">Waifu Labs</el-link>
              <el-link href="https://dreamlike.art/" target="_blank" type="primary">dreamlike.art</el-link>
              <el-link href="https://www.artbreeder.com/" target="_blank" type="primary">Artbreeder</el-link>
              <el-link href="https://www.tiamat.world/" target="_blank" type="primary">Tiamat</el-link>
              <el-link href="https://rightbrain.art/" target="_blank" type="primary">Vega AI</el-link>
              <el-link href="https://wepik.com/ai" target="_blank" type="primary">Wepik AI</el-link>
              <el-link href="https://www.craiyon.com/" target="_blank" type="primary">Craiyon</el-link>
              <el-link href="https://aigc.wondershare.cn/" target="_blank" type="primary">万兴爱画</el-link>
              <el-link href="https://writesonic.com/photosonic-ai-art-generator" target="_blank" type="primary">Photosonic</el-link>
              <el-link href="https://www.astria.ai/" target="_blank" type="primary">Astria</el-link>
              <el-link href="https://getimg.ai/" target="_blank" type="primary">getimg.ai</el-link>
              <el-link href="https://www.dreamup.com/" target="_blank" type="primary">DreamUp</el-link>
              <el-link href="https://scribblediffusion.com/" target="_blank" type="primary">Scribble Diffusion</el-link>
              <el-link href="https://lexica.art/" target="_blank" type="primary">Lexica</el-link>
              <el-link href="https://generated.photos/" target="_blank" type="primary">Generated Photos</el-link>
              <el-link href="https://picsart.com/ai-image-generator" target="_blank" type="primary">Picsart AI</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">背景移除：</el-link>
              <el-link href="https://www.gaoding.com/koutu" target="_blank" type="danger">稿定抠图</el-link>
              <el-link href="https://www.yijiankoutu.com/" target="_blank" type="danger">一键抠图</el-link>
              <el-link href="https://cutout.meitu.com/" target="_blank" type="danger">美图抠图</el-link>
              <el-link href="https://icons8.com/bgremover" target="_blank" type="danger">Icons8 Background Remover</el-link>
              <el-link href="https://clipdrop.co/remove-background" target="_blank" type="primary">ClipDrop Remove Background</el-link>
              <el-link href="https://www.erase.bg/" target="_blank" type="primary">Erase.bg</el-link>
              <el-link href="https://bgsub.cn/" target="_blank" type="primary">BgSub</el-link>
              <el-link href="https://icons8.com/goprod" target="_blank" type="primary">GoProd</el-link>
              <el-link href="https://www.adobe.com/express/feature/image/remove-background" target="_blank" type="primary">Adobe Image Background Remover</el-link>
              <el-link href="https://removal.ai/" target="_blank" type="primary">Removal.AI</el-link>
              <el-link href="https://magicstudio.com/zh/backgrounderaser/" target="_blank" type="primary">Background Eraser</el-link>
              <el-link href="https://www.slazzer.com/" target="_blank" type="primary">Slazzer</el-link>
              <el-link href="https://www.cutout.pro/zh-cn/remove-background" target="_blank" type="primary">Cutout.Pro抠图</el-link>
              <el-link href="https://bgremover.vanceai.com/" target="_blank" type="primary">BGremover</el-link>
              <el-link href="https://www.remove.bg/" target="_blank" type="primary">Remove.bg</el-link>
              <el-link href="https://tools.picsart.com/image/background-remover/" target="_blank" type="primary">Quicktools Background Remover</el-link>
              <el-link href="https://zyro.com/tools/image-background-remover" target="_blank" type="primary">Zyro</el-link>
              <el-link href="https://photoscissors.com/" target="_blank" type="primary">PhotoScissors</el-link>
              <el-link href="https://clippingmagic.com/" target="_blank" type="primary">ClippingMagic</el-link>
              <el-link href="https://www.picup.shop/" target="_blank" type="primary">皮卡智能</el-link>
              <el-link href="https://hotpot.ai/remove-background" target="_blank" type="primary">Hotpot</el-link>
              <el-link href="https://www.stylized.ai/" target="_blank" type="primary">Stylized</el-link>
              <el-link href="https://pebblely.com/" target="_blank" type="primary">Pebblely</el-link>
              <el-link href="https://mokker.ai/" target="_blank" type="primary">Mokker</el-link>
              <el-link href="https://www.booth.ai/" target="_blank" type="primary">Booth.ai</el-link>
              <el-link href="https://www.pixelcut.ai/" target="_blank" type="primary">Pixelcut.ai</el-link>
              <el-link href="https://picwish.com/" target="_blank" type="primary">PicWish</el-link>
              <el-link href="https://www.photoroom.com/background-remover" target="_blank" type="primary">PhotoRoom</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">无损放大：</el-link>
              <el-link href="https://icons8.com/goprod" target="_blank" type="danger">GoProd</el-link>
              <el-link href="https://www.upscayl.org/" target="_blank" type="primary">Upscayl</el-link>
              <el-link href="https://bigjpg.com/" target="_blank" type="primary">BigJPG</el-link>
              <el-link href="https://letsenhance.io/" target="_blank" type="primary">Let's Enhance</el-link>
              <el-link href="https://icons8.com/upscaler" target="_blank" type="primary">Icons8 Smart Upscaler</el-link>
              <el-link href="https://clipdrop.co/image-upscaler" target="_blank" type="primary">ClipDrop Image Upscaler</el-link>
              <el-link href="https://imgupscaler.com/" target="_blank" type="primary">Img.Upscaler</el-link>
              <el-link href="https://www.fotor.com/image-upscaler/" target="_blank" type="primary">Fotor AI Image Upscaler</el-link>
              <el-link href="https://zyro.com/tools/image-upscaler" target="_blank" type="primary">Zyro AI Image Upscaler</el-link>
              <el-link href="https://www.media.io/image-upscaler.html" target="_blank" type="primary">Media.io</el-link>
              <el-link href="https://www.upscale.media/" target="_blank" type="primary">Upscale.media</el-link>
              <el-link href="https://ai.nero.com/image-upscaler" target="_blank" type="primary">Nero Image Upscaler</el-link>
              <el-link href="https://vanceai.com/image-resizer/" target="_blank" type="primary">VanceAi Image Resizer</el-link>
              <el-link href="https://photoaid.com/en/tools/ai-image-enlarger" target="_blank" type="primary">PhotoAid Image Upscaler</el-link>
              <el-link href="https://upscalepics.com/" target="_blank" type="primary">Upscalepics</el-link>
              <el-link href="https://magicstudio.com/zh/enlarger/" target="_blank" type="primary">Image Enlarger</el-link>
              <el-link href="https://pixelhunter.io/" target="_blank" type="primary">Pixelhunter</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">画质修复：</el-link>
              <el-link href="https://yunxiu.meitu.com/" target="_blank" type="danger">美图云修</el-link>
              <el-link href="https://jpghd.com/" target="_blank" type="danger">jpgDD</el-link>
              <el-link href="https://www.cutout.pro/zh-CN/photo-colorizer-black-and-white" target="_blank" type="danger">Cutout.pro 老照片上色</el-link>
              <el-link href="https://www.restorephotos.io/" target="_blank" type="primary">Restorephotos.io</el-link>
              <el-link href="https://palette.fm/" target="_blank" type="primary">Palette</el-link>
              <el-link href="https://clipdrop.co/relight" target="_blank" type="primary">Relight</el-link>
              <el-link href="https://facet.ai/" target="_blank" type="primary">Facet</el-link>
              <el-link href="https://playgroundai.com/" target="_blank" type="primary">Playground AI</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">物体抹除：</el-link>
              <el-link href="https://www.hama.app/" target="_blank" type="danger">HaMa</el-link>
              <el-link href="https://bgeraser.com/" target="_blank" type="primary">Bg Eraser</el-link>
              <el-link href="https://snapedit.app/" target="_blank" type="primary">SnapEdit</el-link>
              <el-link href="https://cleanup.pictures/" target="_blank" type="primary">Cleanup.pictures</el-link>
              <el-link href="https://www.cutout.pro/zh-CN/image-retouch-remove-unwanted-objects" target="_blank" type="primary">Cutout.pro</el-link>
              <el-link href="https://magicstudio.com/zh/magiceraser/" target="_blank" type="primary">Magic Eraser</el-link>
              <el-link href="https://www.watermarkremover.io/" target="_blank" type="primary">WatermarkRemover</el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="4" align="left">
            <template #title>
              <el-icon><Headset /></el-icon> 音频视频
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">音频相关：</el-link>
              <el-link href="https://tianyin.music.163.com/" target="_blank" type="danger">网易天音</el-link>
              <el-link href="https://peiyin.xunfei.cn/" target="_blank" type="danger">讯飞智作</el-link>
              <el-link href="https://xstudio.music.163.com/" target="_blank" type="danger">网易云音乐.X Studio</el-link>
              <el-link href="https://www.notta.ai/en/home" target="_blank" type="danger">语音转文字</el-link>
              <el-link href="https://www.ibm.com/products/text-to-speech" target="_blank" type="danger">IBM Watson文字转语音</el-link>
              <el-link href="https://fakeyou.com/" target="_blank" type="danger">Fakeyou文本转语音</el-link>
              <el-link href="https://www.moyin.com/" target="_blank" type="danger">魔音工坊</el-link>
              <el-link href="https://bgmcat.com/" target="_blank" type="primary">BGM猫</el-link>
              <el-link href="https://yueyin.zhipianbang.com/" target="_blank" type="primary">悦音配音</el-link>
              <el-link href="https://mubert.com/" target="_blank" type="primary">Mubert背景音乐生成</el-link>
              <el-link href="https://tingwu.aliyun.com/" target="_blank" type="primary">通义听悟</el-link>
              <el-link href="https://krisp.ai/" target="_blank" type="primary">AI噪音消除</el-link>
              <el-link href="https://play.ht/" target="_blank" type="primary">AI语音生成</el-link>
              <el-link href="https://soundraw.io/" target="_blank" type="primary">音乐生成工具</el-link>
              <el-link href="https://clipchamp.com/zh-hans/features/ai-voice-over-generator/" target="_blank" type="primary">旁白生成器</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">视频相关：</el-link>
              <el-link href="https://aigc.baidu.com/" target="_blank" type="danger">度家创作工具</el-link>
              <el-link href="https://aigc.yizhentv.com/" target="_blank" type="danger">一帧秒创</el-link>
              <el-link href="https://runwayml.com/green-screen/" target="_blank" type="danger">AI视频制作</el-link>
              <el-link href="https://www.d-id.com/" target="_blank" type="danger">DID虚拟人制作</el-link>
              <el-link href="https://zenvideo.qq.com/" target="_blank" type="primary">腾讯智影</el-link>
              <el-link href="https://www.kuaijianji.com/" target="_blank" type="primary">快剪辑</el-link>
              <el-link href="https://www.laihua.com/" target="_blank" type="primary">来画</el-link>
              <el-link href="https://virbo.wondershare.cn/" target="_blank" type="primary">万兴播报</el-link>
              <el-link href="https://weta365.com/conduct" target="_blank" type="primary">奇妙元</el-link>
              <el-link href="https://huiyingzimu.com/" target="_blank" type="primary">绘影字母</el-link>
              <el-link href="https://www.animiz.cn/microvideo/" target="_blank" type="primary">万彩微影</el-link>
              <el-link href="https://lumen5.com/" target="_blank" type="primary">文章转视频</el-link>
              <el-link href="https://dreamfaceapp.com/" target="_blank" type="primary">DreamFace图片动起来</el-link>
              <el-link href="https://www.veed.io/zh-CN/tools/video-background-remover" target="_blank" type="primary">视频背景移除</el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="5" align="left">
            <template #title>
              <el-icon><Guide /></el-icon> 编程设计
            </template>
            <div>
             <el-link :underline="false" style="font-weight:bold;">编程工具：</el-link>
              <el-link href="https://github.com/features/copilot" target="_blank" type="danger">AI编程工具</el-link>
              <el-link href="https://aws.amazon.com/cn/codewhisperer/" target="_blank" type="danger">亚马逊编程助手</el-link>
              <el-link href="https://www.useblackbox.io/" target="_blank" type="primary">黑箱</el-link>
              <el-link href="https://codeium.com/" target="_blank" type="primary">代码自动生成补全</el-link>
              <el-link href="https://www.codium.ai/" target="_blank" type="primary">代码测试工具</el-link>
              <el-link href="https://jam.dev/jamgpt" target="_blank" type="primary">Debug调试助手</el-link>
              <el-link href="https://www.airops.com/" target="_blank" type="primary">Sql语句生成修改</el-link>
              <el-link href="https://www.imgcook.com/" target="_blank" type="primary">Imgcook图生代码</el-link>
            </div>
            <div>
              <el-link :underline="false" style="font-weight:bold;">设计工具：</el-link>
              <el-link href="https://www.gaoding.com/ai" target="_blank" type="danger">稿定AI</el-link>
              <el-link href="https://js.design/ai" target="_blank" type="danger">即时AI</el-link>
              <el-link href="https://design.meitu.com/poster/" target="_blank" type="primary">美图设计室</el-link>
              <el-link href="https://taishan.qq.com/brand/" target="_blank" type="primary">智绘设计</el-link>
              <el-link href="https://luban.aliyun.com/" target="_blank" type="primary">鹿班</el-link>
              <el-link href="https://ling.jd.com/" target="_blank" type="primary">羚珑</el-link>
              <el-link href="https://modao.cc/" target="_blank" type="primary">墨刀AI</el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="6" align="left">
            <template #title>
              <el-icon><Medal /></el-icon> 办公学习
            </template>
            <div>
              <el-link :underline="false" style="font-weight:bold;">办公工具：</el-link>
              <el-link href="https://ppt.isheji.com/" target="_blank" type="danger">爱设计PPT</el-link>
              <el-link href="https://design.meitu.com/" target="_blank" type="danger">美图AI PPT</el-link>
              <el-link href="https://chatexcel.com/" target="_blank" type="primary">酷表ChatExcel</el-link>
              <el-link href="https://getgetai.com/" target="_blank" type="primary">字语智能</el-link>
              <el-link href="https://www.edrawsoft.cn/mindmaster/" target="_blank" type="primary">亿图脑图</el-link>
              <el-link href="https://static.app.yinxiang.com/evermind/" target="_blank" type="primary">印象图记</el-link>
              <el-link href="https://www.feishu.cn/product/minutes" target="_blank" type="primary">飞书妙记</el-link>
              <el-link href="https://meeting.iflyrec.com/" target="_blank" type="primary">飞书听见</el-link>
              <el-link href="https://work.duiopen.com/" target="_blank" type="primary">麦耳会记</el-link>
              <el-link href="https://www.52cv.com/" target="_blank" type="primary">职徒简历</el-link>
            </div>
            <div>
             <el-link :underline="false" style="font-weight:bold;">提示指令：</el-link>
              <el-link href="https://175ai.cn/" target="_blank" type="danger">一起玩AI</el-link>
              <el-link href="https://www.ai016.com/" target="_blank" type="danger">绘AI</el-link>
              <el-link href="https://icihun.com/" target="_blank" type="primary">词魂</el-link>
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
