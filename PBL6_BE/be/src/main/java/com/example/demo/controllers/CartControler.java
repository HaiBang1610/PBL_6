package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BillDTO;
import com.example.demo.dto.BillDetailDTO;
import com.example.demo.dto.CartItemDTO;
import com.example.demo.dto.NewCartDTO;
import com.example.demo.model.Bill;
import com.example.demo.repository.BillRepository;
import com.example.demo.service.BillService;
import com.example.demo.service.GoodsService;
import com.example.demo.service.UserService;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class CartControler {

	@Autowired
	UserService userService;
	@Autowired
	BillService billService;
	@Autowired
	GoodsService goodsService;
	@Autowired
	private BillRepository billRepository;

//	@Autowired
//	GoodsCartService goodsCartService;
	@Autowired
	private JavaMailSender emailSender;

	@PostMapping("/saveCart")
	public void saveCart(@RequestBody NewCartDTO newCartDTO) {

		billService.saveCart(newCartDTO);
	}

	@GetMapping("/getAll")
	public List<BillDTO> getAllBills() {

		return billService.getAllBills();
	}

	@PostMapping("/toggleStatus/{id}")
	public void toggleStatus(@PathVariable("id") long id) {

		Bill bill = billRepository.findById(id).get();
		bill.setStatus(!bill.getStatus());
		billRepository.save(bill);
	}

//	@GetMapping("/getAll")
//	public ResponseEntity<List<GoodsCartDTO>> getAllGoodsCart(@RequestParam("username") String username) {
//		User user = userService.findByUsername(username);
//		List<GoodsCartDTO> goodsCartDTOList = new ArrayList<>();
//		if (user == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		Cart cart = user.getCart();
//		List<GoodsCart> goodsCartList = cart.getGoodsCartCollection();
//		if (goodsCartList.isEmpty()) {
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		}
//		for (GoodsCart goodsCart : goodsCartList) {
//			if (goodsCart.getStatus().equals(true)) {
//				goodsCartDTOList.add(new GoodsCartDTO(goodsCart.getIdGoodsCart(), goodsCart.getIdGoods(),
//						goodsCart.getQuantityCart(), goodsCart.getGoodsName(), goodsCart.getPrice(),
//						goodsCart.getTradeMark(), goodsCart.getSaleOff(), goodsCart.getPriceForSaleOff(),
//						goodsCart.getImage(), goodsCart.getCart().getIdCart(), goodsCart.getStatus(),
//						goodsCart.getQuantity()));
//			}
//
//		}
//		return new ResponseEntity<>(goodsCartDTOList, HttpStatus.OK);
//	}
//
//	@GetMapping("/findByIdGoods/{idGoods}")
//	public ResponseEntity<GoodsCartDTO> findByGoodsCart(@PathVariable("idGoods") Long idGoods) {
//		GoodsCart goodsCart = goodsCartService.findByIdGoodsStatus(idGoods);
//		if (goodsCart == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		GoodsCartDTO goodsCartDTO = new GoodsCartDTO(goodsCart.getIdGoodsCart(), goodsCart.getIdGoods(),
//				goodsCart.getQuantityCart(), goodsCart.getGoodsName(), goodsCart.getPrice(), goodsCart.getTradeMark(),
//				goodsCart.getSaleOff(), goodsCart.getPriceForSaleOff(), goodsCart.getImage(),
//				goodsCart.getCart().getIdCart(), goodsCart.getStatus(), goodsCart.getQuantity());
//		return new ResponseEntity<>(goodsCartDTO, HttpStatus.OK);
//	}
//
//	@GetMapping("/find-by-cart")
//	public ResponseEntity<Long> findByCart(@RequestParam("username") String username) {
//		User user = userService.findByUsername(username);
//		if (user == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		Cart cart = user.getCart();
//		return new ResponseEntity<>(cart.getIdCart(), HttpStatus.OK);
//	}
//
//	@GetMapping("/pay-money")
//	public ResponseEntity<Boolean> payMoney(@RequestParam("username") String username) {
//		boolean check = false;
//		User user = userService.findByUsername(username);
//		if (user == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		Cart cart = user.getCart();
//		Goods goods = null;
//		List<GoodsCart> goodsCartList = goodsCartService.findGoodsCartByCart_IdCartAndStatusTrue(cart.getIdCart());
//		List<GoodsCart> goodsCartList1 = new ArrayList<>();
//		Bill bill = new Bill();
//		Date date1 = new Date();
//		SimpleDateFormat formatter1 = new SimpleDateFormat("dd-MM-yyyy");
//		bill.setCreatedDate(formatter1.format(date1));
//		bill.setBillType(true);
//		bill.setUser(user);
//		bill.setStatus(false);
//		bill.setGoodsCartCollection(goodsCartList1);
//		billService.save(bill);
//		for (GoodsCart goodsCart : goodsCartList) {
//			check = false;
//			goods = goodsService.findById(goodsCart.getIdGoods());
//			if (Integer.parseInt(goods.getQuantity()) >= Integer.parseInt(goodsCart.getQuantityCart())) {
//				check = true;
//				goodsCartList1.add(goodsCart);
//				goods.setQuantity(String.valueOf(
//						Integer.parseInt(goods.getQuantity()) - Integer.parseInt(goodsCart.getQuantityCart())));
//				goodsCart.setQuantity(String.valueOf(
//						Integer.parseInt(goods.getQuantity()) - Integer.parseInt(goodsCart.getQuantityCart())));
//				goodsCart.setStatus(false);
//				goodsCart.setBill(bill);
//				goodsCartService.save(goodsCart);
//				goodsService.save(goods);
//			}
//		}
//		if (check) {
//			try {
//				int index = 0;
//				int priceSale = 0;
//				int totalMoney = 0;
//				MimeMessage message = this.emailSender.createMimeMessage();
//
//				Date date = new Date();
//				SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
//				String dateNow = formatter.format(date);
//				Calendar c = Calendar.getInstance();
//				c.setTime(date);
//				c.add(Calendar.DATE, 3);
//				date = c.getTime();
//				String dateEnd = formatter.format(date);
//
//				System.out.println(String.format("%,.3f", (double) priceSale));
//
//				MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
//				helper.setTo(user.getEmail());
//				helper.setSubject("Hóa đơn thanh toán");
//				StringBuilder mailContent = new StringBuilder("<!DOCTYPE html>\n" + "<html lang=\"en\">\n" + "<head>\n"
//						+ "    <meta charset=\"UTF-8\">\n" + "    <title>Title</title>\n" + "</head>\n" + "<body>\n"
//						+ "<div style=\"width: 600px; margin-left: 100px; border: 1px solid black; background: rgba(255,103,184,0.16); border-radius: 6px\">\n"
//						+ "    <table>\n" + "        <tr>\n"
//						+ "            <td>   <img src=\"(link gán ảnh shop)\" style=\"width: 60px; height: 60px;border-radius: 100%; margin-left: 5px\">\n"
//						+ "            </td>\n" + "            <td>\n"
//						+ "                <h1 style=\"margin-left: 100px; color: #7fad39\">Hóa đơn mua hàng</h1>\n"
//						+ "            </td>\n" + "        </tr>\n" + "\n" + "    </table>\n"
//						+ "    <strong style=\"margin-left: 10px \">Web bán hàng:</strong><strong style=\"; color: #7fad39\"> Ecommerce</strong>   <strong style=\"margin-left: 168px\">Giao hàng ngày: "
//						+ dateNow + "</strong><br>\n"
//						+ "    <strong style=\"margin-left: 10px\">Email: longrin0408.gmail.com </strong>                               <strong style=\"margin-left: 83px\">Người giao: long shipper</strong><br>\n"
//						+ "    <strong style=\"margin-left: 10px\"> Sđt: 0905.999.999</strong>                                                <strong style=\"margin-left: 223px\">Dự kiến giao ngày: "
//						+ dateEnd + "</strong><br>\n" + "    <br>\n"
//						+ "    <strong style=\"margin-left: 200px; font-size: 20px\">Các sản phẩm của bạn</strong>\n"
//						+ "    <table style=\"border-radius: 5px; border: 1px solid black; margin-left: 10px\">\n"
//						+ "        <thead >\n" + "        <tr style=\";border: 1px solid black\">\n"
//						+ "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">#</td>\n"
//						+ "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">Các sản phẩm</td>\n"
//						+ "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">Giá</td>\n"
//						+ "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">Số lượng</td>\n"
//						+ "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">Tổng</td>\n"
//						+ "        </tr>\n" + "        </thead>\n" + "        <tbody>");
//
//				for (GoodsCart goodsCart : goodsCartList1) {
//					index++;
//					priceSale = Integer.parseInt(goodsCart.getPrice()) * Integer.parseInt(goodsCart.getQuantityCart())
//							- ((Integer.parseInt(goodsCart.getPrice()) * Integer.parseInt(goodsCart.getQuantityCart())
//									* Integer.parseInt(goodsCart.getSaleOff())) / 100);
//					totalMoney += priceSale;
//					mailContent.append("<tr>\n");
//					mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
//					mailContent.append(index);
//					mailContent.append("</td>\n");
//					mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
//					mailContent.append(goodsCart.getGoodsName());
//					mailContent.append("</td>\n");
//					mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
//					mailContent.append(String.format("%,.3f", Double.parseDouble((goodsCart.getPrice())) / 1000));
//					mailContent.append(" VNĐ");
//					mailContent.append("</td>\n");
//					mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
//					mailContent.append(goodsCart.getQuantityCart());
//					mailContent.append("</td>\n");
//					mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
//					mailContent.append(String.format("%,.3f", (double) priceSale / 1000));
//					mailContent.append(" VNĐ");
//					mailContent.append("</td>\n");
//					mailContent.append("</tr>\n");
//				}
//
//				mailContent.append("</tbody>\n" + "    </table>\n" + "    <br>\n" + "    <table>\n" + "        <tr>\n"
//						+ "            <td>\n"
//						+ "                <strong style=\"margin-left: 10px\">Phí giao hàng: 15.000 VNĐ</strong>\n"
//						+ "                <br>\n"
//						+ "                <strong style=\"margin-left: 10px\">Tổng chi phí hóa đơn: "
//						+ String.format("%,.3f", (double) (totalMoney + 15000) / 1000) + " VNĐ</strong>\n"
//						+ "            </td>\n" + "            <td>\n"
//						+ "                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfH36G-5u3qfC1VW4_w6zqvjK1Ajcc07zHg&usqp=CAU\" style=\"width: 60px; height: 60px; margin-left: 100px\">\n"
//						+ "            </td>\n" + "            <td >\n"
//						+ "               <strong style=\"margin-left: 10px\">Người Bán ký tên</strong>\n"
//						+ "                <br>\n" + "                <i style=\"margin-left: 37px\"> hải </i><br>\n"
//						+ "                <small style=\"margin-left: 10px\">Long Bang Duy</small>\n"
//						+ "            </td>\n" + "        </tr>\n" + "\n" + "    </table>\n"
//						+ "    <small style=\"margin-left: 10px\"><strong>Địa chỉ giao hàng:</strong> 04 - Nguyễn Lương Bằng - Hòa Khánh Bắc - Liên Chiểu - Đà Nẵng.</small>\n"
//						+ "    <hr>\n"
//						+ "    <a style=\"margin-left: 10px\" href=\"http://trangchucuarminh\">Mua hàng tại đây!</a>\n"
//						+ "    <p style=\"margin-left: 10px\">Cảm ơn bạn đã mua hàng tại website chúng tôi! Chúc quý khánh vui vẻ.</p>\n"
//						+ "</div>\n" + "</body>\n" + "</html>");
//				helper.setText(String.valueOf(mailContent), true);
//				this.emailSender.send(message);
//			} catch (MessagingException messaging) {
//				messaging.getStackTrace();
//			}
//		}
//		return new ResponseEntity<>(true, HttpStatus.OK);
//	}
//
//	@GetMapping("/getBillUser")
//	public ResponseEntity<List<Bill>> getBillUser(@RequestParam("username") String username) {
//		User user = userService.findByUsername(username);
//		if (user == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		List<Bill> billList = billService.findAllBillById_User(user.getIdUser());
//		if (billList.isEmpty()) {
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		}
//		return new ResponseEntity<>(billList, HttpStatus.OK);
//	}
//
//	@GetMapping("/getBillDetail")
//	public ResponseEntity<List<GoodsCart>> getBillDetail(@RequestParam("idBill") String idBill) {
//		Bill bill = billService.findById(Long.parseLong(idBill));
//		if (bill == null) {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//		List<GoodsCart> goodsCartList = (List<GoodsCart>) bill.getGoodsCartCollection();
//		if (goodsCartList.isEmpty()) {
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		}
//		return new ResponseEntity<>(goodsCartList, HttpStatus.OK);
//	}
}
