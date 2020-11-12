import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @file 截屏
 */

class App extends React.Component {
    
  reportLoadHandle = () => {
    const report: any = this.refs.report;
    console.log(report.contentWindow);
  }

  render() {
    return (
      <div>
        <iframe
          ref='report'
          src='https://yangcong345.com/xs-app/cv2/experienceEndReport?lessonId%3D5f07ecdb1095132a829ace19%26moduleId%3D5f07ecdb109513147a9ace1a%26classId%3D5f0ddbd7e1e362783f85ee73%26avatarUrl%3Dhttp%253A%252F%252Fthirdwx.qlogo.cn%252Fmmopen%252Fvi_32%252FUTv6IyNCKMGTdh1siaZRGghjHqVicCwyBOOIpKmeJoyqvQHRcNUQYuU4kFYmvJ98DJpK9fz7DXl0cDCSbAgkUsBw%252F132%26userName%3D%25E5%25A4%25AA%25E5%259C%25A8%25E6%2584%258FNls%26userId%3D5efdff57ab9eee000154b283'
          onLoad={this.reportLoadHandle}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
